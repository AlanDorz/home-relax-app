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
                { group: 'dips', name: 'Отжимания на брусьях плечами' },
                { group: 'dips', name: 'Негативные отжимания на брусьях' },
                { group: 'dips', name: 'Отжимания на брусьях' }
            ],
            [
                { group: 'hinges', name: 'Наклоны корпуса вперед' },
                { group: 'hinges', name: 'Наклоны вперед на одной ноге' },
                { group: 'hinges', name: 'Гиперэкстензия' }
            ]
        ],
        [
            [
                { group: 'rows', name: 'Вертикальные подтягивания корпуса' },
                { group: 'rows', name: 'Подтягивания корпуса в наклоне' },
                { group: 'rows', name: 'Горизонтальные подтягивания корпуса' }
            ],
            [
                { group: 'pushups', name: 'Отжимания под наклоном' },
                { group: 'pushups', name: 'Классические отжимания' },
                { group: 'pushups', name: 'Алмазные отжимания' }
            ]
        ],
    ],
    warmups: [
        {
            title: 'Разомните кисти, локти, плечи и шею круговыми движениями',
            desc: 'Выполните столько раз, сколько захотите, но минимум по 8 раз в каждую сторону.'
        },
        {
            title: 'Повторите руками форму букв Y, T и W, сводя лопатки',
            desc: 'Поднимайте руки так, словно хотите показать буквы: Y, T и W. Для Y поднимите руки над головой и разведите немного в стороны. Затем соедините руки перед собой. Для Т разведите руки в стороны на уровне плеч, лопатки должны касаться друг друга. Затем соедините руки перед собой. Для W немного согните локти и разведите руки в стороны на уровне плеч.'
        },
        {
            title: 'Покрутите 10 раз палку над головой, держа руки в форме Y',
            desc: 'Возьмите в руки гимнастическую палку или швабру, или футболку, или полотенце. Чем шире возьмете, тем проще. Заведите руки с палкой за голову к низу спины и верните в исходное положение.'
        },
        {
            title: 'Мертвые жуки 10 раз на каждую сторону',
            desc: 'Лягте на спину и поднимите согнутые в коленях ноги, чтобы между коленями и бедрами стало 90 градусов, икры параллельно полу. Затем поднимите руки вверх — это исходное положение. Затем попеременно вытягивайте противоположную руку за голову, при этом вытягивая противоположную ногу. Нога не касается пола.'
        }
    ],
    core: [
        {
            title: 'Планка на левом боку, затем на правом',
            desc: 'Выполните столько секунд, сколько захотите, но минимум по 30 на каждую сторону.'
        },
        {
            title: 'Классическая планка',
            desc: 'Выполните столько секунд, сколько захотите, но минимум 30. Держите корпус прямым и следите, чтобы таз не опускался и не поднимался. Если тяжело, то делайте планку под наклоном.'
        },
        {
            title: 'Растяжка',
            desc: 'Растяните мыщцы спины, груди, трицепсы и ноги.'
        }
    ]
}