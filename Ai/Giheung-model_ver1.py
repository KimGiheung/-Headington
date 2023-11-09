import math
from transformers import pipeline

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

def calculate_distance(lat1, lon1, lat2, lon2):
    # 지구의 반지름 (km)
    R = 6371.0

    # 라디안으로 변환
    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)

    # 경도와 위도의 차이
    dlon = lon2_rad - lon1_rad
    dlat = lat2_rad - lat1_rad

    # 허버사인 공식
    a = math.sin(dlat / 2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    # 거리 (km)
    distance = R * c
    return distance

def calculate_time(distance, speed):
    # 속도가 km/h 단위이므로, 거리를 속도로 나누어 시간(시간 단위)을 구한다.
    # 그 후, 시간을 초로 변환한다.
    time_hours = distance / speed
    time_seconds = time_hours * 3600
    return time_seconds

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
def calculate_final_score(distance, rating, sentiment_score):
    # 점수 계산 로직 (여기서는 거리와 시간이 더 짧을수록, 평점과 감정 점수가 높을수록 좋은 것으로 가정)
    score = (rating * rating_weight + sentiment_score * sentiment_weight) / (distance * distance_weight)
    return score

if __name__ == "__main__":
    # 거리 계산
    distance = calculate_distance(origin['latitude'], origin['longitude'], destination['latitude'], destination['longitude'])
    print("최종 score: ", calculate_final_score(distance, rating, analyze_review_sentiments(reviews)))