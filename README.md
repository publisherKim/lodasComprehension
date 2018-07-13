# 목적: lodash 무작정 따라하기
## study branch의 의미
+ 학습이란 의미이다.
+ 각각의 로대쉬들을 그대로 구현해보고 prefixTest 라는 조각들을 study 한 군데로 모은다.
+ 현업에서 쉽게쓰이는 develop branch의 역활이다.
## prefixTest branch들의 의미
+ branchName: addTest
+ 함수의 구현 및 설계에대한 이해가 늘어날수록 wiki에 기록(개념정리)을 누적한다.
### add
+ 사용자는 코드의 구조나 로직을 알 필요 없이 add(10, 10) 등으로 사용하면 된다.
+ add -> createMathOperation -> baseToNumber, baseToString -> isSymbol -> getTag -> baseGetTag
+ 테스트는 코드는 콘솔로 대신한다.
