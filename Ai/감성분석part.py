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