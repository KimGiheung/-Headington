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
grouped_data = review_data.groupby('facility').agg({'review_text': list, 'rating': 'mean'})

    # 인덱스 재설정
grouped_data.reset_index(inplace=True)



# 결과 출력
print(grouped_data.head())



# 4. 각 리뷰에 대해 감성 분석을 시뮬레이션하여 감정 점수를 도출
sentiment_scores = [random.uniform(0, 1) for _ in range(20)]  # 감정 점수 리스트


# 5. 감정점수, 평균 평점, 거리를 고려하여 수유실을 추천합니다.
# 각 수유실에 대한 종합 점수를 계산합니다.
combined_scores = []
for i in range(20):
    score = sentiment_scores[i] * 0.5 + reviews_ratings[i][1] * 0.3 - distances[0][i] * 0.2
    combined_scores.append((score, i))

# 종합 점수가 가장 높은 5개의 수유실을 추천합니다.
recommended_indices = sorted(combined_scores, reverse=True)[:5]

# 추천된 수유실의 위치를 가져옵니다.
recommended_rooms = [(nursing_rooms[idx][0], nursing_rooms[idx][1]) for _, idx in recommended_indices]

# 6. 백엔드로 사용자 ID와 추천된 수유실 위치를 전송합니다.
# 실제로는 API 호출을 통해 전송하지만, 여기서는 출력으로 대체합니다.
backend_data = {
    "user_id": user_id,
    "recommended_rooms": recommended_rooms
}

backend_data  # 이 데이터를 백엔드로 전송하게 됩니다.