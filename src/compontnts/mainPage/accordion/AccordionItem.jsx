
function AccordionItem(props) {

    return (
        <div className={`accordion__item ${props.isOpen ? 'open' : ''}`} onClick={() => props.openTab(props.index)}>
                        <div className="flex justify-between items-center">
                            <h4 className="accordion-item__title">{props.title}</h4>
                            <div className={`accordion-item__close ${props.isOpen ? 'open' : ''}`}>
                                    <span className="accordion-close__line"></span>
                                    <span className="accordion-close__line"></span>
                            </div>
                        </div>
                        {props.isOpen ? <p className={`accordion-item__descr`}>{props.descr}</p> : ''} 


         </div>
    );
  }
  
  export default AccordionItem;
  