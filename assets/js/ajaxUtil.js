//두가지 방법
//1. class 생성 후 빌더처럼 ajax를 사용한다.
//2. 아니면 모듈 패턴으로 get post put push ajax를 만들어서 간단하게 제작한다.

//일단 파일 업로드가 없기 때문에 데이터 형식은 json으로 고정
//모듈패턴으로 만드는게 조금 더 간한다하고 생각됨
//필요한 매개변수는 url, 보낼 데이터, 성공 시 처리( 실패는 일괄 처리 )
//하나 더 url을 매번 전부 다 입력하기 매우 번거로움, 따라서 url 클래스를 만든 후 생성자에 basicURL 입력 받고 메서드로 set을 만들어 뒷부분을 추가하는 형식이면 사용하기 편할 것 같음.

//const url = new URL("http://localhost:8080/")
//getAjax(url, data, success) => getAjax(url.set("getList"), data, success)
