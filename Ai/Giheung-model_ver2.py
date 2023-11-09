from sklearn.neighbors import NearestNeighbors
import numpy as np
import random

# 1. 사용자 ID, 위도, 경도를 하드코딩된 값으로 가정
user_id = "user123"
user_location = np.array([[35.116315938499866, 128.967294753387]])  # 가상의 사용자 위치

# 2. kNN 알고리즘을 사용하여 수유실을 추려냅니다. 
# 가상의 수유실 위치 데이터를 생성합니다.
nursing_rooms = np.random.rand(100, 2) * 0.01 + user_location  # 사용자 주변의 수유실 위치

# kNN 모델을 사용하여 가장 가까운 20개의 수유실을 찾습니다.
nearest_nursing_rooms = knn.kneighbors(user_location, n_neighbors=20, return_distance=True)
knn.fit(nursing_rooms)

# 사용자 위치에 가장 가까운 20개의 수유실을 찾습니다.
distances, indices = knn.kneighbors(user_location)

# 3. 수유실의 [리뷰, 평균 평점] 데이터를 하드코딩된 값으로 가정합니다.
reviews_ratings = [(["리뷰 내용 A", "리뷰 내용 B"], 4.5)] * 20  # 각 수유실마다 리뷰 두 개와 평균 평점

# 4. 각 리뷰에 대해 감성 분석을 시뮬레이션하여 감정 점수를 도출합니다.
# 실제로는 `transformers` 라이브러리를 사용하지만 여기서는 랜덤 점수를 생성합니다.
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