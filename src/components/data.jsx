
const data = [
       {
        id: 'coffee01',
        dataStatus:'블렌드',
        logo:'./image/roa_01.png',
        image : './image/coffee_01.png',
        desc:'고소 & 묵직한',
        title: '[컬렉터커피] 뉴커먼',
        price:'12,000원',
        pricevalue:12000
      },
      {
        id: 'coffee02',
        dataStatus:'블렌드',
        logo:'./image/roa_10.png',
        image : './image/coffee_02.png',
        desc:'상큼 & 깔끔한',
        title: '[하늘에커피] 하늘에 시그니처 블랜딩',
        price:'11,500원',
        pricevalue:11500
      },
      {
        id: 'coffee03',
        logo:'./image/roa3_01.png',
        image : './image/coffee_03.jpeg',
        desc:'달콤 & 상큼',
        title: '[영앤도터스] 룰라바이',
        price:'18,000원',
        pricevalue:18000
      },
      {
        id: 'coffee04',
        logo:'./image/roa3_02.png',
        image : './image/coffee_04.jpeg',
        desc:'밸런스 & 부드러운',
        title: '[커피몽타주] 비터스윗 라이트 에디션 1',
        price:'12,000원',
        pricevalue:12000
      },
      {
        id: 'coffee05',
        logo:'./image/roa3_03.jpg',
        image : './image/coffee_05.jpeg',
        desc:'화사한 & 과일',
        title: '[앰비언스] 아이리스',
        price:'14,000원',
        pricevalue:14000
      },
      {
        id: 'coffee06',
        logo:'./image/roa3_04.png',
        image : './image/coffee_06.jpeg',
        desc:'과일 & 화사한',
        title: '[한국커피] 에티오피아 반코 고고티',
        price:'14,000원',
        pricevalue:14000
      },
      {
        id: 'coffee07',
        logo:'./image/roa3_05.jpg',
        image : './image/coffee_07.jpeg',
        desc:'화사한 & 꽃향기',
        title: '[브니엘 커피] 마이로맨스',
        price:'12,000원',
        pricevalue:12000
      },
      {
        id: 'coffee08',
        logo:'./image/roa3_06.png',
        image : './image/coffee_08.jpeg',
        desc:'과일 & 은은한',
        title: '[리버벨] 코스타리카 SHB EP',
        price:'16,000원',
        pricevalue:16000
      },
     {
        id: 'coffee09_single',
        dataStatus:'싱글오리진',
        logo:'./image/roa3_07.png',
        image : './image/coffee2_01.png',
        desc:'고소 & 묵직한',
        title: '[식물학 커피] 마리모',
        price:'13,000원',
        pricevalue:13000
      },
      {
        id: 'coffee10_single',
        dataStatus:'싱글오리진',
        logo:'./image/roa3_08.png',
        image : './image/coffee2_02.png',
        desc:'고소 & 묵직한',
        title: '[센터커피] 에티오피아 예가체프',
        price:'11,500원',
        pricevalue:11500
      },
      {
        id: 'coffee11_single',
        dataStatus:'single',
        logo:'./image/roa3_09.png',
        image : './image/coffee2_03.png',
        desc:'쌉쌀 & 묵직한',
        title: '[인더매스] #55-scale',
        price:'13,500원',
        pricevalue:13500
      },
      {
        id: 'coffee12_single',
        dataStatus:'single',
        logo:'./image/roa_11.png',
        image : './image/coffee2_04.jpeg',
        desc:'고소 & 쌉쌀',
        title: '[하우트] 썸즈업 블렌드',
        price:'7,000원',
        pricevalue:7000
      },
      {
        id: 'coffee13_single',
        dataStatus:'single',
        logo:'./image/roa3_10.png',
        image : './image/coffee2_05.jpeg',
        desc:'쌉쌀 & 묵직한',
        title: '[프레이저커피] 인디언 헤드',
        price:'18,000원',
        pricevalue:18000
      },
      {
        id: 'coffee14_single',
        dataStatus:'single',
        logo:'./image/roa3_03.jpg',
        image : './image/coffee2_06.jpeg',
        desc:'달콤 & 쌉쌀',
        title: '[앰비언스] 헬로 다크니스',
        price:'12,000원',
        pricevalue:12000
      },
      {
        id: 'coffee15_single',
        dataStatus:'single',
        logo:'./image/roa2_07.png',
        image : './image/coffee2_07.jpeg',
        desc:'달콤 & 묵직한',
        title: '[리플렉트] 콜롬비아 에스프레소',
        price:'14,000원',
        pricevalue:14000
      },
      {
        id: 'coffee16_single',
        dataStatus:'single',
        logo:'./image/roa_06.png',
        image : './image/coffee2_08.jpeg',
        desc:'꽃향기 & 깔끔한',
        title: '[컬러드 빈] BEIGE 블랜드',
        price:'16,000원',
        pricevalue:16000
      }
      ,
       //로스터리 로고
      {
        id: 'Roa01_logo',
        title: '커넥츠 로스터리',
        img:'./image/roa_01.png',
      },
      {
          id: 'Roa02_logo',
          title: '180로스터리',
          img:'./image/roa_02.png',
      },
      {
          id: 'Roa03_logo',
          title: '리플로우 커피 로스터리',
          img:'./image/roa_03.png',
      },
      {
          id: 'Roa04_logo',
          title: '슬러펀 커피',
          img:'./image/roa_04.png'
      },
    
      {
          id: 'Roa05_logo',
          title: '링크 커피',
          img:'./image/roa_05.png'
      },
      {
          id: 'Roa06_logo',
          title: '컬러드 빈',
          img:'/image/roa_06.png'
      },
      {
          id: 'Roa07_logo',
          title: '프로토콜 로스터스',
          img:'./image/roa_07.png'
      },
      {
          id: 'Roa08_logo',
          title: '오드이븐',
          img:'./image/roa_08.png'
      },
      {
          id: 'Roa09_logo',
          title: '카페플롬',
          img:'./image/roa_09.png'
      },
      {
          id: 'Roa10_logo',
          title: '하늘에커피',
          img:'./image/roa_10.png'
      },
      {
          id: 'Roa11_logo',
          title: '하우트 커피컴퍼니',
          img:'./image/roa_11.png'
      },
      {
          id: 'Roa12_logo',
          title: '디벨로핑룸',
          img:'./image/roa2_04.png'
      },
      {
          id: 'Roa13_logo',
          title: '디카프워크룸',
          img:'./image/roa2_05.png'
      },
      {
           id: 'Roa14_logo',
          title: '선빌리지 커피',
          img:'./image/roa2_06.png'
      },
      {
          id: 'Roa15_logo',
          title: '리플렉트 커피 로스터스',
          img:'./image/roa2_07.png'
      },
      {
          id: 'Roa16_logo',
          title: '토치커피',
          img:'./image/roa2_08.png'
      }
]


export default data;