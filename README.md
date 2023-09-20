# 실행 방법

```
git clone https://github.com/0miiii/Implement-search-bar.git

npm install

npm run dev
```

# 구현 사항

## 캐싱을 통해 중복된 API 호출 최소화

`useCache` 커스텀 훅을 통해 캐시를 관리합니다.

검색어를 입력했을 때, 캐시에 입력한 검색어가 저장되어 있는지 확인합니다.

확인 후 검색어가 저장되어 있다면 저장된 결과값을 반환합니다.

만약 검색어가 저장되어 있지 않다면 캐시에 검색어를 저장합니다.

## 디바운싱을 통해 연속된 API 호출 최소화

`useDebounce` 커스텀 훅을 통해 함수의 호출 횟수를 관리합니다.

연속된 API 호출이 발생할 때, 첫 번째 API 호출을 delay 후에 실행하는 타이머를 생성합니다.

delay가 지나기 전에 연속으로 두 번째 API 호출이 발생하면, 기존의 타이머를 삭제 후 새로운 타이머를 생성하여 delay 후 API 요청을 합니다.

delay가 지나기 전에 API 호출이 연속적으로 발생한다면 위의 과정을 반복합니다.

delay 안에 API 호출이 더 이상 발생하지 않는다면 delay 후에 API 호출이 발생합니다.

## 키보드를 통해 검색어 이동 구현

`useKeyboardNavigation` 커스텀 훅을 통해 방향키로 이동한 위치를 관리합니다.

기존의 값에서 방향키 위를 누르면 값이 증가하고, 아래를 누르면 값이 감소합니다.
