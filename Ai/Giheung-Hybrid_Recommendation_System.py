import numpy as np
import pandas as pd
import random
from transformers import pipeline
import googlemaps

import tensorflow as tf
from keras.models import Model
from keras.layers import Input, Dense, Embedding, Flatten, concatenate

# Google Maps 클라이언트 초기화
gmaps = googlemaps.Client(key='AIzaSyDzRETOuOyRHqc9YkvZsO663mFIrty_t50')

# 임의의 사용자 현재 위치(위도, 경도)를 request 받았다고 가정.
# 사용자 위치는 동아대학교승학캠퍼스 공학대학2호관
origin = {
        "latitude": 35.116315938499866,
        "longitude": 128.967294753387
    }

  
# 임의의 목적지 위치(위도, 경도)를 request 받았다고 가정.
# 목적지 위치는 부신교통공사하단역
destination ={
        "latitude": 35.10618422,
        "longitude": 128.9662412
    }
# 리뷰 데이터 리스트
reviews = [
    "최근에 쇼핑몰 안에 있는 수유실을 사용해봤는데 정말 깨끗하고 프라이버시가 보장되어서 좋았어요. 아기를 편안하게 수유할 수 있어서 너무 만족스러웠습니다.",
    "앱으로 찾은 수유실이 생각보다 작아서 조금 당황했어요. 그래도 필요한 용품들은 잘 구비되어 있어서 급한 대로는 괜찮았습니다.",
    "최근에 쇼핑몰 안에 있는 수유실을 사용해봤는데 정말 깨끗하고 프라이버시가 보장되어서 좋았어요. 아기를 편안하게 수유할 수 있어서 너무 만족스러웠습니다.",
    "앱으로 찾은 수유실이 생각보다 작아서 조금 당황했어요. 그래도 필요한 용품들은 잘 구비되어 있어서 급한 대로는 괜찮았습니다.",
    "수유실을 찾는 것이 너무 쉬워졌어요! 이 앱 덕분에 아기를 데리고 외출하는 것이 한결 수월해졌습니다. 감사합니다!",
    "앱에서 추천한 수유실 중 몇 군데는 관리가 잘 안 되고 있었어요. 청소 상태도 별로였고, 편의 시설도 부족했습니다. 개선이 필요해 보입니다.",
    "수유실 검색 기능이 정말 편리해요. 하지만 앱이 종종 다운되서 불편했습니다. 안정성 면에서 좀 더 개선이 필요할 것 같네요.",
    "이 앱 덕분에 급하게 수유실을 찾을 때 정말 큰 도움이 됐습니다. 사용하기도 간편하고, 수유실 상태도 대체로 만족스러웠어요.",
    "앱의 인터페이스가 직관적이어서 좋았는데, 몇몇 수유실은 실제로 가보니 이미 폐쇄되었더라고요. 정보 업데이트가 더 자주 이루어지면 좋겠습니다.",
    "수유실이 깨끗하고 넓어서 아기와 함께 편하게 시간을 보낼 수 있었어요. 앱이 추천해준 곳이라 더 신뢰가 갑니다.",
    "앱 사용법이 복잡해서 처음에는 적응하기 어려웠어요. 수유실은 좋았지만, 사용자 경험 측면에서 개선이 필요해 보입니다.",
    "정말 좋은 앱입니다. 다양한 장소의 수유실 정보를 제공해주고, 리뷰도 많아서 신뢰할 수 있었습니다. 앞으로도 자주 사용할 것 같아요."
]
#임의rating
rating = 4.5


# 거리 및 시간 계산 함수
def calculate_distance_duration(origin, destination):
    # API 요청을 통해 거리와 시간을 얻습니다.
    result = gmaps.distance_matrix(origin, destination, mode='walking')['rows'][0]['elements'][0]
    distance = result['distance']['value']  # 미터 단위
    duration = result['duration']['value']  # 초 단위
    return distance, duration

# 감정 분석 파이프라인 초기화
sentiment_analysis = pipeline("sentiment-analysis")
# 감정 분석 함수
def analyze_review_sentiments(reviews):
    results = sentiment_analysis(reviews)
    # 평균 감정 점수 계산 (긍정적인 감정일 경우 높은 점수 부여)
    scores = [result['score'] if result['label'] == 'POSITIVE' else 1 - result['score'] for result in results]
    return sum(scores) / len(scores)

# 가중치 초기값 설정    
distance_weight = 0.001  # 거리에 대한 가중치
rating_weight = 1.0  # 평점에 대한 가중치
sentiment_weight = 2.0  # 감정 분석에 대한 가중치

# 최종 점수 계산 함수
def calculate_final_score(distance, duration, rating, sentiment_score):
    # 점수 계산 로직 (여기서는 거리와 시간이 더 짧을수록, 평점과 감정 점수가 높을수록 좋은 것으로 가정)
    score = (rating * rating_weight + sentiment_score * sentiment_weight) / (distance * distance_weight + duration)
    return score

if __name__ == "__main__":
    distance, duration = calculate_distance_duration(origin, destination)
    sentiment_score = analyze_review_sentiments(reviews)
    score = calculate_final_score(distance, duration, rating, sentiment_score)
    print("score :", score)


# # 3. 협업 필터링 모델 추가
# # 사용자-아이템 평점 행렬 구성


# # 사용자-아이템 평점 행렬 예제
# # 이 행렬은 사용자의 수유실 평점을 나타냅니다.
# user_item_matrix = np.array([
#     [5, 3, 0, 1],  # 사용자 1의 수유실 평점
#     [4, 0, 0, 1],  # 사용자 2의 수유실 평점
#     [1, 1, 0, 5],  # 사용자 3의 수유실 평점
#     [1, 0, 0, 4],  # 사용자 4의 수유실 평점
#     [0, 1, 5, 4],  # 사용자 5의 수유실 평점
#     # 더 많은 사용자 데이터가 있다고 가정합니다.
# ])

# #협업 필터링 (딥러닝 기반 추천 알고리즘 적용)

# # 사용자 수와 아이템 수 설정
# num_users, num_items = user_item_matrix.shape

# # 모델 구성
# user_input = Input(shape=(1,), name='user_input')
# item_input = Input(shape=(1,), name='item_input')

# user_embedding = Embedding(output_dim=5, input_dim=num_users + 1, input_length=1, name='user_embedding')(user_input)
# item_embedding = Embedding(output_dim=5, input_dim=num_items + 1, input_length=1, name='item_embedding')(item_input)

# user_vecs = Flatten()(user_embedding)
# item_vecs = Flatten()(item_embedding)

# concat = concatenate([user_vecs, item_vecs])

# dense = Dense(128, activation='relu')(concat)
# predictions = Dense(1)(dense)

# model = Model(inputs=[user_input, item_input], outputs=predictions)
# model.compile(optimizer='adam', loss='mean_squared_error')

# # 모델 학습
# # 실제 구현에서는 사용자 ID와 아이템 ID에 맞는 입력 데이터를 제공해야 합니다.
# history = model.fit([user_ids, item_ids], ratings, epochs=20, verbose=1)






# # 1. 모의 데이터 생성
# # 사용자 ID, 아이템 ID, 평점 및 리뷰 생성
# num_users = 10
# num_items = 5
# ratings = np.random.randint(1, 6, size=(num_users, num_items))
# reviews = [["Great place!", "Not bad", "Could be better", "Loved it!", "It was okay"] for _ in range(num_users)]

# # 거리 및 시간 데이터 생성
# distances = np.random.randint(100, 2000, size=(num_users, num_items))  # 거리 (미터)
# durations = np.random.randint(60, 3600, size=(num_users, num_items))  # 시간 (초)

# # 2. 협업 필터링 모델 아키텍처 설계
# # TensorFlow 및 Keras를 사용하여 모델을 설계할 수 있습니다.
# # ...

# # 3. 하이퍼파라미터 조정
# # 모델의 성능을 최적화하기 위해 필요한 하이퍼파라미터를 설정합니다.
# # ...

# # 4. 거리 계산 (모의 데이터 사용)
# # 실제 구현에서는 Google Maps API 호출로 대체합니다.
# # ...

# # 5. 리뷰 감정 분석 (transformers 사용)
# sentiment_analysis = pipeline("sentiment-analysis")
# sentiment_scores = [[sentiment_analysis(review)[0]['score'] if sentiment_analysis(review)[0]['label'] == 'POSITIVE' else 1 - sentiment_analysis(review)[0]['score'] for review in user_reviews] for user_reviews in reviews]

# # 이제 가중치 조정과 최종 추천 점수 계산을 위한 로직을 추가할 수 있습니다.
# # ...
