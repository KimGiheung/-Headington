import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
# 1. 사용자 ID, 위도, 경도를 하드코딩된 값으로 가정
user_id = "user123"
user_location = np.array([[35.116315938499866, 128.967294753387]])  # 가상의 사용자 위치

# 2. kNN 알고리즘을 사용하여 수유실을 추려냅니다. 

# CSV 파일 읽기 (한국어 인코딩 처리)
file_path = 'C:\\Users\\win\\Documents\\GitHub\\MamMaMap\\Data\\myfile.csv'
data = pd.read_csv(file_path, encoding='cp949')

# 수유실의 경도와 위도 데이터 추출
nursing_rooms = data[['경도', '위도']]

# kNN 모델을 사용하여 가장 가까운 20개의 수유실을 찾습니다.
knn = NearestNeighbors(n_neighbors=20)
knn.fit(nursing_rooms)

# 사용자 위치에 가장 가까운 20개의 수유실을 찾습니다.
distances, indices = knn.kneighbors(user_location)

print(distances, indices)
# 3. 수유실의 [리뷰, 평균 평점] 데이터를 불러옴
review_file_path = 'C:\\Users\\win\\Documents\\GitHub\\MamMaMap\\Data\\biased_nursing_room_reviews_with_facility_order(리뷰,평점데이터).csv'
try:
    review_data = pd.read_csv(review_file_path, encoding='utf-8')
except UnicodeDecodeError:
    review_data = pd.read_csv(review_file_path, encoding='utf-16')

    # 수유실별로 리뷰 텍스트를 리스트로 묶고 평균 평점 계산
reviews_ratings = review_data.groupby('facility').agg({'review_text': list, 'rating': 'mean'})

    # 인덱스 재설정
reviews_ratings.reset_index(inplace=True)
reviews_ratings = reviews_ratings['rating'].tolist()
# 결과 출력
print("reviews_ratings")
print(reviews_ratings, sep = '\n')
#============================================================================================
#=========================================== 감정 점수========================================
#============================================================================================
# 4. 각 리뷰에 대해 감성 분석을 시뮬레이션하여 감정 점수를 도출
import matplotlib.pyplot as plt
import seaborn as sns

import warnings
warnings.filterwarnings('ignore')
df = pd.read_csv(review_file_path, encoding='utf-8')
# 정규 표현식 함수 정의

import re

def apply_regular_expression(text):
    hangul = re.compile('[^ ㄱ-ㅣ 가-힣]')  # 한글 추출 규칙: 띄어 쓰기(1 개)를 포함한 한글
    result = hangul.sub('', text)  # 위에 설정한 "hangul"규칙을 "text"에 적용(.sub)시킴
    return result
#특수문자 제거
apply_regular_expression(df['review_text'][0])
from konlpy.tag import Okt
from collections import Counter
okt = Okt()  # 명사 형태소 추출 함수
nouns = okt.nouns(apply_regular_expression(df['review_text'][0]))
nouns
# 말뭉치 생성
corpus = "".join(df['review_text'].tolist())
corpus
# 정규 표현식 적용
apply_regular_expression(corpus)
# 전체 말뭉치(corpus)에서 명사 형태소 추출
nouns = okt.nouns(apply_regular_expression(corpus))
print(nouns)
counter = Counter(nouns)
counter.most_common(10)
#한글자 명사 제거
available_counter = Counter({x: counter[x] for x in counter if len(x) > 1})
available_counter.most_common(10)
#한국어 불용어 사전
stopwords = pd.read_csv("https://raw.githubusercontent.com/yoonkt200/FastCampusDataset/master/korean_stopwords.txt").values.tolist()
stopwords[:10]
#데이터셋에 특화된 불용어 처리 ex)수유실
nursing_room_stopwords = ['수유실', '부산']
for word in nursing_room_stopwords:
    stopwords.append(word)
#워드 카운트
from sklearn.feature_extraction.text import CountVectorizer

def text_cleaning(text):
    hangul = re.compile('[^ ㄱ-ㅣ 가-힣]')  # 정규 표현식 처리
    result = hangul.sub('', text)
    okt = Okt()  # 형태소 추출
    nouns = okt.nouns(result)
    nouns = [x for x in nouns if len(x) > 1]  # 한글자 키워드 제거
    nouns = [x for x in nouns if x not in stopwords]  # 불용어 제거
    return nouns
    
vect = CountVectorizer(tokenizer = lambda x: text_cleaning(x))
bow_vect = vect.fit_transform(df['review_text'].tolist())
word_list = vect.get_feature_names_out()
count_list = bow_vect.toarray().sum(axis=0)
# 단어 리스트
word_list
# 각 단어가 전체 리뷰중에 등장한 총 횟수
count_list
# 각 단어의 리뷰별 등장 횟수
bow_vect.toarray()
# "단어" - "총 등장 횟수" Matching

word_count_dict = dict(zip(word_list, count_list))
word_count_dict
def rating_to_label(rating):
    if rating > 3:
        return 1
    else:
        return 0

df['y'] = df['rating'].apply(lambda x: rating_to_label(x))

#분류 모델 베이스라인

# 필요한 라이브러리 import
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 데이터 준비
X = df['review_text']  # 텍스트 데이터
y = df['y']  # 레이블 (긍정: 1, 부정: 0)

# 훈련 데이터와 테스트 데이터로 분리
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 텍스트 데이터 전처리 함수 (앞서 구현한 것과 비슷하게)
def text_preprocessing(text):
    # 원하는 전처리 작업을 수행
    text = apply_regular_expression(text)
    nouns = text_cleaning(text)
    return ' '.join(nouns)  # 명사들을 공백으로 구분하여 하나의 문자열로 만듦

X_train = X_train.apply(text_preprocessing)
X_test = X_test.apply(text_preprocessing)

# 텍스트 데이터를 벡터로 변환 (위에서 사용한 CountVectorizer 사용)
vect = CountVectorizer(tokenizer=lambda x: x)
X_train_bow = vect.fit_transform(X_train)
X_test_bow = vect.transform(X_test)

# 분류 모델 학습
model = RandomForestClassifier(random_state=42)
model.fit(X_train_bow, y_train)

# 예측
y_pred = model.predict(X_test_bow)

# 정확도 평가
accuracy = accuracy_score(y_test, y_pred)
print(f"모델 정확도: {accuracy}")

# 예측 함수 (텍스트를 입력으로 받아 긍정 또는 부정 예측)
def predict_sentiment(text):
    preprocessed_text = text_preprocessing(text)
    text_vector = vect.transform([preprocessed_text])
    prediction = model.predict(text_vector)[0]
    return prediction

# 예측 테스트
sample_text = "이 수유실은 정말 편리하고 깨끗해요!"
result = predict_sentiment(sample_text)
print(f"텍스트 감정: {result}")

df['predicted_sentiment'] = df['review_text'].apply(predict_sentiment)
# 수유실별로 예측된 감정 점수의 평균을 계산합니다.
sentiment_scores = df.groupby('facility')['predicted_sentiment'].mean().reset_index()
sentiment_scores = sentiment_scores['predicted_sentiment'].tolist()
# 결과 출력
print("sentiment_scores")
print(sentiment_scores, sep = '\n')
#============================================================================================

# 5. 감정점수, 평균 평점, 거리를 고려하여 수유실을 추천합니다.
# 각 수유실에 대한 종합 점수를 계산합니다.
combined_scores = []
for i in range(20):
    score = sentiment_scores[i] * 0.5 + reviews_ratings[i] * 0.3 - distances[0][i] * 0.2
    combined_scores.append((score, i))

# 종합 점수가 가장 높은 5개의 수유실을 추천합니다.
recommended_indices = sorted(combined_scores, reverse=True)[:5]

# 추천된 수유실의 위치를 가져옵니다.
recommended_rooms = [(nursing_rooms.iloc[idx][0], nursing_rooms.iloc[idx][1]) for _, idx in recommended_indices]

print("사용자 추천 리스트")
print(recommended_rooms)


# 6. 백엔드로 사용자 ID와 추천된 수유실 위치를 전송합니다.
# 실제로는 API 호출을 통해 전송하지만, 여기서는 출력으로 대체합니다.
backend_data = {
    "user_id": user_id,
    "recommended_rooms": recommended_rooms
}

backend_data  # 이 데이터를 백엔드로 전송하게 됩니다.