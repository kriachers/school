function BackToTopButton() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={`back-to-top-button`} onClick={() => scrollUp()}>
            <img className="back-to-top-button__icon" src="./ui/arrow.svg" alt="" />
        </div>
    );
  }
  
  export default BackToTopButton;
  