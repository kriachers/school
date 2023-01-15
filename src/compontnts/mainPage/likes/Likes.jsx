import SubTile from '../../ux/SubTile'

const likesData = [
{
    title: 'Продвинутая геймификация',
    descr: 'Мы используем мини-игры чтобы увлечь ребенка в процесс решения задач и помочь усвоить материал в интересной форме',
},
{
    title: 'Не зубрят и не переписывают учебники',
    descr: 'Дети вовлечены в урок по средствам взаимодействия между собой и педагогом. Играют в тематические квизы. Смотрят видео и разбирают материал.',
},
{
    title: 'Никакого стресса',
    descr: 'В учебных классах поддерживается атмосфера дружбы и уважения. Никакого давления. Дети чувствуют себя комфортно',
},

]


function Likes(props) {
    return (
        <div className="bg-blue">
            <div className="likes container container-bottom">
                <SubTile title={'Дети любят наши уроки потому что:'}></SubTile>

                <div className="likes___wrapper flex">
                    <ul className="likes__plate">
                    {
                        likesData.map((item) => {
                            return (
                                <div className="likes-plate__list flex">
                                    <img src="./likes/list.svg" alt="" />
                                    <li className="likes-list__item">
                                        <h4 className="likes-item__title">{item.title}</h4>
                                        <p className="likes-item__descr">{item.descr}</p>
                                    </li>
                                </div>
                            )
                        })
                    }
                    </ul>
                    <div>
                        <img src="./likes/computer.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
  }
  
  export default Likes;
  