const menuData = [
    {title: 'Для кого', location: ''},
    {title: 'Как проходят уроки', location: ''},
    {title: 'Преимущества', location: ''},
    {title: 'Цены', location: ''},
    {title: 'Контакты', location: ''},
]

function HeaderBar() {
  return (
    <div className="headerBar container">
        <ul className="headerBar__menu flex">
        {
            menuData.map((item) => {
                return (
                    <li className="headerBar__item"><a href=""></a>{item.title}</li>
                )
            })
        }
        </ul>
    </div>
  );
}

export default HeaderBar;