import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './button';

export const Main = () => {

  return (
    <section className='visual_main'>
      <div className="visual_main_bg">
        <img src={'./image/main_desktop.jpeg'} alt="코케비주얼메인이미지" />
        <div className="visual_main_box">
          <div className="visual_main_txt">
            <h2>코케가 선택한 좋은원두, 신선한 원두<br></br>
            다양한 브랜드들의 원두를 즐겨보세요.
            </h2>
            <p className="subtitle">코케의 원두들이 궁금하신가요?</p>
            <Link to={'/allcoffee'} ><Button text='자세히 보기'></Button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
