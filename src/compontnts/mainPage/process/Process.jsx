import SubTile from '../../ux/SubTile'

const processData = [
    {
        title: 'Живые уроки с учителем',
        descr: 'Увлекательные уроки с учителем, на которых каждому ребенку будет уделено внимание',
        img: './prosess/teacher.svg'
    },
    {
        title: 'Дополнительные материалы',
        descr: 'Материалы по каждой теме без лишней воды помогут закрепить знания',
        img: './prosess/matherials.svg'
    },
    {
        title: 'Домашнее задание',
        descr: 'Для закрепления всего ранее полученного материала дети получают домашнее задание',
        img: './prosess/homework.svg'
    },
    {
        title: 'Проверка и оценка',
        descr: 'Все домашние задания проверяются учителем и выставляется оценка в дневник',
        img: './prosess/marks.svg'
    },
]

function Process(props) { 

    return (
        <div className="container">
        <section id="Process" className="section container-bottom">
            <SubTile title={'Как проходят уроки в нашей онлайн школе?'}></SubTile>
            <div className="process__plate">
            <img className="process__bg" src="./prosess/lines.svg" alt="" />
            {
            processData.map((item) => {
                return (
                <div className="process__tile flex">
                    <img className='process-tile__img' src={item.img} alt="" />
                    <div className="process-tile__wrapper">
                        <h4 className='process-tile__title'>{item.title}</h4>
                        <p className='process-tile__descr'>{item.descr}</p>
                    </div>
                </div>
                )
            })
            }
            </div>
        </section>
        </div>

    );
  }
  
  export default Process;
  