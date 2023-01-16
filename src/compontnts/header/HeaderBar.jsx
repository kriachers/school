const menuData = [
    {title: 'Для кого', place: '#Audience'},
    {title: 'Как проходят уроки', place: '#Process'},
    {title: 'Преимущества', place: '#Likes'},
    {title: 'Отзывы', place: '#Reviews'},
]

function HeaderBar() {
  return (
    <div className="headerBar container">
        <ul className="headerBar__menu flex">
        {
            menuData.map((item) => {
                return (
                    <li className="headerBar__item"><a className="headerBar__link" href={`${item.place}`}>{item.title}</a></li>
                )
            })
        }
        </ul>
    </div>
  );
}

export default HeaderBar;