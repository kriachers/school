import { useState } from "react";
import AccordionItem from './AccordionItem'

const accordionData = [
    {
        isOpen: false,
        title: 'Домашнее обучение в «Школе Будущего Онлайн',
        descr: `Домашнее образование в «Школе Будущего Онлайн» дает много свободы ученику и возможность развиваться как индивидуальность. Такой формат обучения идеально подходит для детей, которые хотят эффективно использовать свое время и с максимальной пользой для достижения поставленных целей.

        Наша домашняя интернет школа имеет лицензию образовательного учреждения, предоставляет программу обучения, которая соответствует государственной. При этом мы используем уникальные методики, игровой формат и квизы для максимального вовлечения учеников в учебный процесс.
        
        Современное образование онлайн позволяет ученику всесторонне развиваться и совмещать учебу с увлечениями, спортом и творчеством без перенапряжения с оптимальным распределением времени. Такой формат дает положительные результаты в обучении ребенка. Есть возможность развития индивидуальных особенностей, талантов и склонностей к одной или нескольким наукам, которые могут в будущем стать основой профессии.
        
        Домашняя школа для ребенка – это возможность:
        учиться в комфортном режиме;
        совмещать учебу с личным развитием;
        получить обратную связь от учителей и индивидуальный подход.
        
        Согласно действующему законодательству семейная форма обучения доступна по желанию любому ребенку. Для этого достаточно подать заявление в обычную школу и перейти на домашний формат обучения. Чтобы при семейном формате обучения ребенок не сбился с графика, а также своевременно проходил базовые темы государственной образовательной программы прекрасным помощником станет онлайн-школа.
        
        Наша  онлайн школа поможет сделать семейное обучение эффективным за счет дополнительных учебных материалов, кураторства и помощи учителей. Чтобы узнать, подходит ли такой формат обучения, всегда можно пройти недельный бесплатный курс.`,
    },
    {
        isOpen: false,
        title: 'Как поступить в «Школу Будущего Онлайн',
        descr: `Домашнее образование в «Школе Будущего Онлайн» дает много свободы ученику и возможность развиваться как индивидуальность. Такой формат обучения идеально подходит для детей, которые хотят эффективно использовать свое время и с максимальной пользой для достижения поставленных целей.

        Наша домашняя интернет школа имеет лицензию образовательного учреждения, предоставляет программу обучения, которая соответствует государственной. При этом мы используем уникальные методики, игровой формат и квизы для максимального вовлечения учеников в учебный процесс.
        
        Современное образование онлайн позволяет ученику всесторонне развиваться и совмещать учебу с увлечениями, спортом и творчеством без перенапряжения с оптимальным распределением времени. Такой формат дает положительные результаты в обучении ребенка. Есть возможность развития индивидуальных особенностей, талантов и склонностей к одной или нескольким наукам, которые могут в будущем стать основой профессии.
        
        Домашняя школа для ребенка – это возможность:
        учиться в комфортном режиме;
        совмещать учебу с личным развитием;
        получить обратную связь от учителей и индивидуальный подход.
        
        Согласно действующему законодательству семейная форма обучения доступна по желанию любому ребенку. Для этого достаточно подать заявление в обычную школу и перейти на домашний формат обучения. Чтобы при семейном формате обучения ребенок не сбился с графика, а также своевременно проходил базовые темы государственной образовательной программы прекрасным помощником станет онлайн-школа.
        
        Наша  онлайн школа поможет сделать семейное обучение эффективным за счет дополнительных учебных материалов, кураторства и помощи учителей. Чтобы узнать, подходит ли такой формат обучения, всегда можно пройти недельный бесплатный курс.`,
    },
    {
        isOpen: false,
        title: 'Как перевести ребенка на семейное обучение',
        descr: `Домашнее образование в «Школе Будущего Онлайн» дает много свободы ученику и возможность развиваться как индивидуальность. Такой формат обучения идеально подходит для детей, которые хотят эффективно использовать свое время и с максимальной пользой для достижения поставленных целей.

        Наша домашняя интернет школа имеет лицензию образовательного учреждения, предоставляет программу обучения, которая соответствует государственной. При этом мы используем уникальные методики, игровой формат и квизы для максимального вовлечения учеников в учебный процесс.
        
        Современное образование онлайн позволяет ученику всесторонне развиваться и совмещать учебу с увлечениями, спортом и творчеством без перенапряжения с оптимальным распределением времени. Такой формат дает положительные результаты в обучении ребенка. Есть возможность развития индивидуальных особенностей, талантов и склонностей к одной или нескольким наукам, которые могут в будущем стать основой профессии.
        
        Домашняя школа для ребенка – это возможность:
        учиться в комфортном режиме;
        совмещать учебу с личным развитием;
        получить обратную связь от учителей и индивидуальный подход.
        
        Согласно действующему законодательству семейная форма обучения доступна по желанию любому ребенку. Для этого достаточно подать заявление в обычную школу и перейти на домашний формат обучения. Чтобы при семейном формате обучения ребенок не сбился с графика, а также своевременно проходил базовые темы государственной образовательной программы прекрасным помощником станет онлайн-школа.
        
        Наша  онлайн школа поможет сделать семейное обучение эффективным за счет дополнительных учебных материалов, кураторства и помощи учителей. Чтобы узнать, подходит ли такой формат обучения, всегда можно пройти недельный бесплатный курс.`,
    },
    {
        isOpen: false,
        title: 'Что входит в цену на дистанционное школьное образование',
        descr: `Домашнее образование в «Школе Будущего Онлайн» дает много свободы ученику и возможность развиваться как индивидуальность. Такой формат обучения идеально подходит для детей, которые хотят эффективно использовать свое время и с максимальной пользой для достижения поставленных целей.

        Наша домашняя интернет школа имеет лицензию образовательного учреждения, предоставляет программу обучения, которая соответствует государственной. При этом мы используем уникальные методики, игровой формат и квизы для максимального вовлечения учеников в учебный процесс.
        
        Современное образование онлайн позволяет ученику всесторонне развиваться и совмещать учебу с увлечениями, спортом и творчеством без перенапряжения с оптимальным распределением времени. Такой формат дает положительные результаты в обучении ребенка. Есть возможность развития индивидуальных особенностей, талантов и склонностей к одной или нескольким наукам, которые могут в будущем стать основой профессии.
        
        Домашняя школа для ребенка – это возможность:
        учиться в комфортном режиме;
        совмещать учебу с личным развитием;
        получить обратную связь от учителей и индивидуальный подход.
        
        Согласно действующему законодательству семейная форма обучения доступна по желанию любому ребенку. Для этого достаточно подать заявление в обычную школу и перейти на домашний формат обучения. Чтобы при семейном формате обучения ребенок не сбился с графика, а также своевременно проходил базовые темы государственной образовательной программы прекрасным помощником станет онлайн-школа.
        
        Наша  онлайн школа поможет сделать семейное обучение эффективным за счет дополнительных учебных материалов, кураторства и помощи учителей. Чтобы узнать, подходит ли такой формат обучения, всегда можно пройти недельный бесплатный курс.`,
    },
    {
        isOpen: false,
        title: 'Контроль успеваемости в онлайн школе',
        descr: `Домашнее образование в «Школе Будущего Онлайн» дает много свободы ученику и возможность развиваться как индивидуальность. Такой формат обучения идеально подходит для детей, которые хотят эффективно использовать свое время и с максимальной пользой для достижения поставленных целей.

        Наша домашняя интернет школа имеет лицензию образовательного учреждения, предоставляет программу обучения, которая соответствует государственной. При этом мы используем уникальные методики, игровой формат и квизы для максимального вовлечения учеников в учебный процесс.
        
        Современное образование онлайн позволяет ученику всесторонне развиваться и совмещать учебу с увлечениями, спортом и творчеством без перенапряжения с оптимальным распределением времени. Такой формат дает положительные результаты в обучении ребенка. Есть возможность развития индивидуальных особенностей, талантов и склонностей к одной или нескольким наукам, которые могут в будущем стать основой профессии.
        
        Домашняя школа для ребенка – это возможность:
        учиться в комфортном режиме;
        совмещать учебу с личным развитием;
        получить обратную связь от учителей и индивидуальный подход.
        
        Согласно действующему законодательству семейная форма обучения доступна по желанию любому ребенку. Для этого достаточно подать заявление в обычную школу и перейти на домашний формат обучения. Чтобы при семейном формате обучения ребенок не сбился с графика, а также своевременно проходил базовые темы государственной образовательной программы прекрасным помощником станет онлайн-школа.
        
        Наша  онлайн школа поможет сделать семейное обучение эффективным за счет дополнительных учебных материалов, кураторства и помощи учителей. Чтобы узнать, подходит ли такой формат обучения, всегда можно пройти недельный бесплатный курс.`,
    },
    {
        isOpen: false,
        title: 'Преимущества обучения в онлайн-школе',
        descr: `Домашнее образование в «Школе Будущего Онлайн» дает много свободы ученику и возможность развиваться как индивидуальность. Такой формат обучения идеально подходит для детей, которые хотят эффективно использовать свое время и с максимальной пользой для достижения поставленных целей.

        Наша домашняя интернет школа имеет лицензию образовательного учреждения, предоставляет программу обучения, которая соответствует государственной. При этом мы используем уникальные методики, игровой формат и квизы для максимального вовлечения учеников в учебный процесс.
        
        Современное образование онлайн позволяет ученику всесторонне развиваться и совмещать учебу с увлечениями, спортом и творчеством без перенапряжения с оптимальным распределением времени. Такой формат дает положительные результаты в обучении ребенка. Есть возможность развития индивидуальных особенностей, талантов и склонностей к одной или нескольким наукам, которые могут в будущем стать основой профессии.
        
        Домашняя школа для ребенка – это возможность:
        учиться в комфортном режиме;
        совмещать учебу с личным развитием;
        получить обратную связь от учителей и индивидуальный подход.
        
        Согласно действующему законодательству семейная форма обучения доступна по желанию любому ребенку. Для этого достаточно подать заявление в обычную школу и перейти на домашний формат обучения. Чтобы при семейном формате обучения ребенок не сбился с графика, а также своевременно проходил базовые темы государственной образовательной программы прекрасным помощником станет онлайн-школа.
        
        Наша  онлайн школа поможет сделать семейное обучение эффективным за счет дополнительных учебных материалов, кураторства и помощи учителей. Чтобы узнать, подходит ли такой формат обучения, всегда можно пройти недельный бесплатный курс.`,
    },

]

function Accordion () {

    const [open, setOpen] = useState([...accordionData])

    function openTab(index) {
        accordionData[index].isOpen = !accordionData[index].isOpen
        setOpen([...accordionData ]);
    }


    return (
        <div className="container">
       <section className="section accordion container-bottom">
        {
            open.map((item, index) => {
                return (
                   <AccordionItem openTab={openTab} index={index} title={item.title} descr={item.descr} isOpen={item.isOpen} ></AccordionItem> 
                )
            })
        }
       </section>
       </div>
    );
  }
  
  export default Accordion;
  