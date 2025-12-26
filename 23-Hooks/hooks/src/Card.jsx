import styled from './Card.module.css';
import Ironman from './Ironman.jpeg';
function Card() {
    return(
        <>
              <div className={styled.card}>
                 <div>
                    <img className={styled.img} src={Ironman} alt="myimage" />
                 </div>
                 <div className={styled.info}>
                    <h3>IRON-MAN</h3>
                    <p>Tony Stark</p>
                 </div>
              </div>
        </>
    );
}
export default Card;