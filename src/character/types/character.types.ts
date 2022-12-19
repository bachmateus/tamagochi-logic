export interface EatResponse {
  status: boolean
  isFoodAvailable: boolean
  doesItFitTheBelly: boolean
}

export interface SetValuesRequest {
  hungryness?: number
}