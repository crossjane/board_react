## 프로젝트 개요
이 프로젝트는 단순한 CRUD 기능을 구현하는 것뿐만 아니라, 배열과 객체의 차이를 정확히 이해하고, 비구조화 할당, map, filter 등의 활용을 익히면서 코드의 숙련도를 높였습니다.

## 배운 점
- 배열과 객체의 차이를 더 깊이 이해함.
이전에는 단순히 배열은 리스트, 객체는 키-값 구조라는 정도로만 생각했는데, 데이터를 다루면서 배열이 순차적인 데이터에 적합하고, 객체는 특정 속성을 기준으로 관리할 때 더 유용하다는 걸 체감하였습니다. 

- 비구조화 할당의 활용
데이터를 다룰 때 const { title, content } = post;처럼 비구조화 할당을 사용하면 코드가 더 간결하고 직관적이 된다는 걸 직접 경험하였습니다. 특히 함수의 매개변수에서 객체를 비구조화하여 바로 필요한 값만 꺼내 쓸 수 있는 점이 익숙해지는데 시간이 걸렸지만 실용적이었습니다.

- map과 filter의 차이를 명확히 이해함.
map은 기존 배열을 변형해서 새로운 배열을 만들 때 유용하고, filter는 조건에 맞는 요소만 추려낼 때 더 적합하다는 걸 알게되었습니다.
예를 들어, 게시글 목록을 화면에 렌더링할 때 map을 활용하고, 특정 조건의 게시글을 삭제할 때는 filter를 사용하는 식으로 적용해보면서 차이를 명확히 이해하였습니다. 

-반복적인 구현을 통한 코드 숙련도 향상
ToDo List를 만들 때도 CRUD 기능을 구현했지만 이번에는 게시판이라는 더 구조적인 형태로 기능을 반복해서 구현 하며 연습을 했습니다. 

## 주요 기능
- 게시글 CRUD (생성, 조회, 수정, 삭제)
- 배열과 객체를 적절히 활용하여 데이터 관리
- map, filter 등을 활용한 효율적인 데이터 조작
- 비구조화 할당을 활용한 코드 가독성 향상
- UI와의 동적 연계 구현