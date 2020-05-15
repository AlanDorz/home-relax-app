let data = {
    user: {
        pullups: {
            level: 2,
            qty: 6
        },
        squats: {
            level: 1,
            qty: 7
        },
        dips: {
            level: 2,
            qty: 6
        },
        hinges: {
            level: 1,
            qty: 8
        },
        rows: {
            level: 1,
            qty: 6
        },
        pushups: {
            level: 1,
            qty: 7
        }
    },
    advice: {
        pullups: [
            'держите спину прямо',
            'разгибайте руки полностью',
            'тянитесь к перекладине грудью, а не подбородком',
            'не раскачивайтесь',
            'не скрещивайте ноги или держите перед собой'
        ],
        squats: [
            'опускайтесь максимально глубоко',
            'не отрывайте пятку и большой палец от пола',
            'держите колени на одной линии с кончиками пальцев ног',
            'не сводите ноги внутрь',
            'полностью выпрямляйте ноги'
        ],
        dips: [
            'держите корпус прямо или слегка наклоните вперед',
            'опустите плечи вниз',
            'опускайтесь настолько низко, на ск-ко сможете',
            'не разводите локти в стороны'
        ],
        rows: [
            'держите корпус прямым',
            'не разводите локти в стороны',
            'полностью выпрямляйте руки'
        ],
        pushups: [
            'держите корпус прямым — особенно следите за бедрами',
            'полностью выпрямляйте руки и вытягивате лопатки',
            'полностью опускайтесь вниз, слегка касаясь пола грудью'
        ]
    },
    sets: [
        [
            [
                { group: 'pullups', name: 'Подтягивания плечами' },
                { group: 'pullups', name: 'Негативные подтягивания' },
                { group: 'pullups', name: 'Подтягивания любым хватом' }
            ],
            [
                { group: 'squats', name: 'Глублокие приседания' },
                { group: 'squats', name: 'Болгарские приседания' },
                { group: 'squats', name: 'Приседания креветкой' }
            ]
        ],
        [
            [
                { group: 'dips', name: 'Отжимания на\xa0брусьях плечами' },
                { group: 'dips', name: 'Негативные отжимания на\xa0брусьях' },
                { group: 'dips', name: 'Отжимания на\xa0брусьях' }
            ],
            [
                { group: 'hinges', name: 'Наклоны корпуса вперед' },
                { group: 'hinges', name: 'Наклоны вперед на\xa0одной ноге' },
                { group: 'hinges', name: 'Гиперэкстензия' }
            ]
        ],
        [
            [
                { group: 'rows', name: 'Вертикальные подтягивания корпуса' },
                { group: 'rows', name: 'Подтягивания корпуса в\xa0наклоне' },
                { group: 'rows', name: 'Горизонтальные подтягивания корпуса' }
            ],
            [
                { group: 'pushups', name: 'Отжимания под\xa0наклоном' },
                { group: 'pushups', name: 'Классические отжимания' },
                { group: 'pushups', name: 'Алмазные отжимания' }
            ]
        ],
    ],
    warmups: [
        {
            title: 'Разомните кисти, локти, плечи\xa0;шею круговыми движениями',
            desc: 'Выполните столько раз, сколько захотите, но минимум по\xa08 раз в\xa0каждую сторону.'
        },
        {
            title: 'Повторите руками форму букв Y, T\xa0и\xa0W, сводя лопатки',
            desc: 'Поднимайте руки так, словно хотите показать буквы: Y, T и W. Для Y поднимите руки над\xa0головой и\xa0разведите немного в\xa0стороны. Затем соедините руки перед собой. Для Т разведите руки в\xa0стороны на уровне плеч, лопатки должны касаться друг друга. Затем соедините руки перед собой. Для W\xa0немного согните локти и\xa0разведите руки в\xa0стороны на\xa0уровне плеч.'
        },
        {
            title: 'Покрутите 10\xa0раз палку над головой, держа руки в\xa0форме\xa0Y',
            desc: 'Возьмите в\xa0руки гимнастическую палку или швабру, или футболку, или полотенце. Чем шире возьмете, тем проще. Заведите руки с\xa0палкой за\xa0голову к\xa0низу спины и\xa0верните в\xa0исходное положение.'
        },
        {
            title: 'Мертвые жуки 10\xa0раз на\xa0каждую сторону',
            desc: 'Лягте на\xa0спину и\xa0поднимите согнутые в\xa0коленях ноги, чтобы между коленями и\xa0бедрами стало 90\xa0градусов, икры параллельно полу. Затем поднимите руки вверх\xa0– это исходное положение. Затем попеременно вытягивайте противоположную руку за\xa0голову, при этом вытягивая противоположную ногу. Нога не\xa0касается пола.'
        }
    ],
    core: [
        {
            title: 'Планка на\xa0левом боку, затем на\xa0правом',
            desc: 'Выполните столько секунд, сколько захотите, но\xa0минимум по\xa030 на\xa0каждую сторону.'
        },
        {
            title: 'Классическая планка',
            desc: 'Выполните столько секунд, сколько захотите, но\xa0минимум 30. Держите корпус прямым и\xa0следите, чтобы таз не\xa0опускался и\xa0не\xa0поднимался. Если тяжело, то\xa0делайте планку под\xa0наклоном.'
        },
        {
            title: 'Растяжка',
            desc: 'Растяните мыщцы спины, груди, трицепсы и\xa0ноги.'
        }
    ]
}