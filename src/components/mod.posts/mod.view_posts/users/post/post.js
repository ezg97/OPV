import React from 'react';

import './post.css';

function Post(props) {

    // fetch based off of 
    //  Type: post type (post, recipe, sales)
    //  ID: id of post

    /*
    function fetchPost() {
        console.log('fetched');
        console.log('id: ' + props.match.params.post_id);
        fetch(`http://localhost:3000/fetch_post/${props.match.params.post_id}`,
            {
                method: "GET",
            }
        )
        .then((res) => {
            console.log('response recieved');
            console.log('res: ' + {res});

            if (!res.ok) {
                return res.json().then(e => Promise.reject(e));
            }
            return res.json();
        })
        .then((pos) => {
            console.log('returned: ' + pos);
        })
        .catch(err => {
            console.log('error: ' + err);
        });
        console.log('fetch done');
    }

    fetchPost();
    */
    let lists = [
        {   'id': 1,
            'title': 'Young Living’s ultraconcentrated Thieves Automatic Dishwasher Powder ',
            'date': 'June 3, 2021',
            'paragraph': `Young Living’s ultraconcentrated Thieves Automatic Dishwasher Powder is back in stock! But that’s not the only good news. Our Aria Diffuser, Egyptian Gold essential oil blend, and K&B are now available for Essential Rewards purchase. Check YoungLiving.com each Thursday for updates. All restocked products are available on Shop and ER with no limits.`,
            'images': "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/195338825_4617416004952311_1660786472982122772_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=0oV1QSOTj5MAX8HgyC9&_nc_ht=scontent-dfw5-1.xx&oh=1e3e2b4804c318ddf624e50c2336af62&oe=60E23ACA"
            , 'links': ['']
        },
        {   'id': 2,
            'title': 'Stress Away™ essential oil blend',
            'date': 'May 4, 2021',
            'paragraph': `Stress Away™ essential oil blend contains a unique combination of Lime essential oil and vanilla extract. It’s this distinct mix that gives Stress Away its unique and pleasant aroma, among other benefits.

Stress Away also includes Copaiba, which has a history of beneficial properties in topical application; Lavender, with its refreshing and calming scent; and Cedarwood, which features the powerful plant constituent cedrol. These ingredients are expertly blended with exotic Ocotea, a unique Ecuador-sourced essential oil.`,
            'images': ""
            , 'links': ['']
        },
        {   'id': 3,
            'title': 'Kinito',
            'date': 'March 27, 2021',
            'paragraph': 
            `This is pretty cool product! Have you ever want to place your diffuser where  there is no wall plug, now you can! (Most diffusers work with it but not the feather the owl nor the new glass blown one). #kinito`
            , 'links': ['https://kinito.life/']
            ,'images': ''
        },
        {   'id': 4,
            'title': 'March Promos',
            'date': 'DECEMBER 16, 2020',
            'paragraph': 
            `FOWARD -
💚 MARCH PROMOS 💚 - relaxation, muscle and joint soothers, skin support and more!
☘️ 100PV // Free Shipping (YES PLEASE!!!) 
☘️ 190PV // COPAIBA, 5ml
            and // LAVENDER, 15ml, ER Only
            and // CLARY SAGE, 5ml, ER Only
☘️ 250PV // RUTAVALA, 5mlll
☘️ 300PV // BLUE CYPRESS, 5ml
            and // IDAHO GRAND FIR, 5ml
☘️ 400PV // AMETHYST ROLLER, ER only 

COPAIBA - This oil is found in lots of products such as Stress Away, Deep Relief, and Cool Azul Pain Cream... yep, it’s definitely great to rub on achy joints and muscles. It’s also a Vitality oil (exact same oil but different label), so a few drops in some NingXia Red each day or even a capsule full along with some Sulfurzyme and NingXia is great to support the body’s immune system.

LAVENDER - The “Swiss Army Knife” of essential oils. We use it for EVERYTHING... relaxation, soothing skin... Oh! And it’s in Lavaderm After-Sun spray which is great for minor burns, cuts and scrapes!

CLARY SAGE - Let’s look at the blends this is in to see why I love it for my skin and as a mood-enhancer: Dragon Time, Sclaressence, and Lady Sclareol. After cleaning and toning your face, this is a great oil to apply before moisturizing, 

RUTAVALA - You may be more familiar with this in a roller bottle size, but I’m excited about using this gem in the diffuser! It’s the top oil for sleep for a lot of people. The rue, valerian, and lavender combination helps relax and calm the brain before bed. When I first smelled this blend about a decade ago, it was not my favorite. While it’s grown on me over the years, I just apply it to my feet or layer it with something I do like to smell. This is one of my oldest daughter’s favorite blends as she uses it when she feels anxious. She rubs it on her wrists and on the back of her neck at the base of her skull and immediately calms and relaxes. It’s amazing!!!

BLUE CYPRESS - Winter is nearly over, but the effects on our skin can last into Spring. If your face needs some extra attention, add a drop to your moisturizer or more to the Dry Skin Serum (it already contains BC plus Cedarwood, Lavender, Myrrh, Clove, and Royal Hawaiian Sandalwood). To spread the love, put a few drops in your bottle of Genesis Lotion to soothe skin all over.  

IDAHO GRAND FIR - Open this bottle and be transported to the undefiled forests of northern Idaho. It’s one of several conifers from the Highland Flats Farm and Distillery. And back in 2013, I had the privilege of working with Gary Young on that Farm to harvest Idaho Grand Fir during Winter Harvest. Add this to your free Copaiba and slather it on tired muscles for a relaxing and invigorating pampering.

AMETHYST ROLLER - This beautiful stone is a lovely partner for oils that encourage balance, creativity, and confidence.`,
            'images': "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/154732974_4323962840964297_4072102432778955228_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=AGeNnA1XkCYAX8HmG52&_nc_ht=scontent-dfw5-2.xx&oh=681241f754a2d3941f64104bc55dab91&oe=60CAE683"
            , 'links': ['']
        },
        {   'id': 5,
            'title': 'Young Living for Children',
            'date': 'December 29, 2020',
            'paragraph': 
            `Life with children is busy enough, you shouldn’t have to worry and stress about finding safe, natural products for your children. Young Living offers a peace of mind solutions for everyone!

🌿KidScents Lotion:
• Increases hydration
• Uses plant based ingredients
• Mango seed butter softens the skin
• Aloe soothes and cools skin
• Raspberry seed oil conditions skin
• Watermelon seed oil conditions skin
• Formulated without synthetic perfumes, artificial colorings, fragrances, preservatives, and mineral oils

🌿KidScents Shampoo:
• Helps hair feel smooth and hydrated
• Uses plant based ingredients
• Hydrolyzed jojoba esters are used as a plant based hair-conditioning agent
• Formulated without parabens, phthalates, mineral oils, synthetic perfumes, synthetic dyes, artificial colors, flavors, preservatives, or harsh chemicals
• Hypoallergenic
• Non-irritating

🌿KidScents Bath Gel:
• Washes away dirt while keeping skin soft
• Hypoallergenic
• Formulated free of mineral oils, synthetic perfumes, synthetic dyes, artificial colors, preservatives, or harsh chemicals
• It contains Aloe vera to soothe and cools the skin
• Kiwifruit and cucumber extract are rich in vitamins C and E, as well as amino acids`,
            'images': "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/p843x403/133129950_4142110722482844_7031098745244453034_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=eiGllFUd_X0AX8rhAvI&tn=nJz63bflD3ejrgJX&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=c6752f8e3552952905e7dba0edb3dc28&oe=60CB393D"
            , 'links': ['']

        },
        {   'id': 6,
            'title': 'DIY Room Sprays make the perfect gift! ',
            'date': 'DECEMBER 10, 2020',
            'paragraph': 
            `DIY Room Sprays make the perfect gift! All you need is a glass spray bottle, essential oils, water, and some witch hazel. Fill your bottle almost full of water. Add your favorite essential oils to the potency of your liking. Top with a little witch hazel, shake, and spritz! There are so many awesome combinations of oils you can use for room sprays... share your favorites below so others can get ideas!
    
    Merry and Bright:
    5-8 drops Grapefruit $.06 per drop
    5-8 drops Cinnamon $.25 per drop
    5-8 drops Peppermint $.07 per drop
    Total= approximately $3.05 without spray bottle
    
    SnickerDoodle:
    8-10 drops Cinnamon (about $.25 per drop)
    5-8 drops Vanilla (about $.32 per drop)
    5-8 drops StressAway (about $.10 per drop)
    Total: Approximately $4.50 without spray bottle
    
    Cosmo Volcano
    4-6 drops Northern Lights Black Spruce (about $.25 per drop) 1.50
    4-6 drops Grapefruit (about $.06 per drop)
    3-5 drops Lemon Myrtle or Lemon Verbena (about $.24 per drop)
    2-3 drops Lime (about $.04 per drop)
    2-3 drops Geranium (about $.14 per drop)
    Total: approximately $3.60 without spray bottle
    Save our cute Cosmo Volcano label to use on your room spray!`,
            "images": "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/p843x403/123137164_3981645381862713_9088309113843382597_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=0N8ffvjgQeAAX-3HG47&_nc_ht=scontent-dfw5-2.xx&tp=6&oh=430e4ed8c918a0a2009120eaac1806e4&oe=60CB4311"
            , 'links': ['']

        },
        {   'id': 7,
            'title': 'Peace & Calming®',
            'date': 'November 2, 2020',
            'paragraph': 
            `5 ways to use Peace and Calming
            
It’s all in the name. Peace & Calming® is a must-have to create peaceful, relaxing feelings, no matter what time of the day it is. Grounding oils like Patchouli and Ylang Ylang give this blend its ability to create a calm environment, where you can feel centered and at peace.

Tangerine, Orange, Ylang Ylang, Patchouli, and Blue Tansy come together to create the sweet, comforting aroma of Peace & Calming. The aroma is a perfect combination of floral and citrus notes. It’s no surprise why this blend is a well-known companion for evening routines and moments of zen.

How do you use Peace and Calming?

• Provide a peaceful aroma when doing yoga and meditating by applying it you’re the bottom of your feet, along your neck, or diffusing.

• Apply it to your temples and neck to harness feelings of balance.

• Pack it in your travel bag to help with sleep schedule adjustments or stressors.

• Finish your day with a relaxing massage by combing it with your favorite carrier oil.

• Have crazy, rambunctious kids? Try filling a 16oz stainless steel spray bottle with water and add around 10-15 drops of Peace and Calming. As your kids are running and playing, try squirting their clothing and backs for a more calm and peaceful environment.

If you haven’t tried this amazing oil, do yourself a favor and get a 15 ml bottle for free this month with every 300 PV order. Peace and Calming is not sold in a 15 ml bottle, so make sure to grab it while you can!`,
            'images': ""
            , 'links': ['']

        },
        {   'id': 8,
            'title': 'Using Oils around your Kids',
            'date': 'October 13, 2020',
            'paragraph': 
            `Do your kids have big feelings? Are your kids in a funk? Use essential oils to align their body and mind and to create the specific atmosphere or environment that YOU want in your home. Next time your kids are experiencing all the feels, try grabbing one of these oils to get its aromatic benefits. Aromas have the power to instantly change the mood in any environment and know that you are experiencing more benefits than just a good-smelling room! 

How can you use oils around your kids?

• Diffuse!

• Put a few drops in your kids’ hands, have them cup their nose, and slowly inhale while taking slow, deep breaths.

• Apply to their wrists, back of the neck, and along the spine for an aromatic boost throughout the day.

• Apply a few drops to their diffuser jewelry of choice.

• Add 2-3 drops to cotton balls and place them around your home.

• Make a linen spray or bedroom mist by mixing essential oils and water in a glass spray bottle. 

• Apply oils to their feet or put a few drops in their sock and shoes.`,
            'images': "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/p843x403/121480792_3923512184342700_8916995619782057972_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xtt0iXH4NcYAX-W4JQ7&_nc_ht=scontent-dfw5-2.xx&tp=6&oh=e28ffd65b4dc229e26d39c3acf3ff562&oe=60CA8532"
            , 'links': ['']

        },
        {   'id': 9,
            'title': 'Blend with Cinnamon + Clove + Eucalyptus + Radiata + Lemon + Rosemary ',
            'date': 'DECEMBER 16, 2020',
            'paragraph': 
            `The best portable immune support…

• Single or blend: Blend, containing Cinnamon + Clove + Eucalyptus  Radiata + Lemon + Rosemary.

• Vitality: Yes.

• Suggested uses…

• Diffuse it in every room in your house- particularly during seasons when friends and coworkers are missing school & work with sickness.

• Place 2-3 drops in a glass of water or (even better) in Ningxia Red and drink every day as part of your wellness routine.

• Make your child a rollerball with the proper age-appropriate dilution so they have on-the-go support.

• Odd fact, tidbit, random info: The story behind Thieves is fascinating. Learn more about it at OilyApp.com/AllThingsThieves.com.

• As well, Young Living created an entire Thieves line based around this oil blend. For your second Young Living order (after the PSK) I highly recommend the Thieves ER kit. It’s the best way to take a deep dive into the world of this immune support powerhouse!`,
            'images': 'https://scontent-dfw5-2.xx.fbcdn.net/v/l/t1.6435-9/p843x403/98450405_3464285483598708_1878993216418611200_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=S4ey8xkTDg4AX-m5a8X&tn=nJz63bflD3ejrgJX&_nc_ht=scontent-dfw5-2.xx&tp=6&oh=760189d22099808dd13c43c508f3647a&oe=60C95F31'
            , 'links': ['']

        },
        {   'id': 10,
            'title': 'Create an Uplifting, positive, and joyful atmosphere',
            'date': 'DECEMBER 16, 2020',
            'paragraph': 
            `You can create an uplifting, positive, and joyful atmosphere in your home simply by diffusing essential oils.

Diffusing essential oils is one of the most powerful ways to enjoy their benefits! Aromas are processed in the body before we are consciously aware of it, and they can set the mood and atmosphere in any environment.

The sense of smell is directly connected to the limbic lobe of your brain, also known as the emotional control center. The limbic lobe is responsible for your mood, memory, behavior, feelings, and emotions, and it is connected to the olfactory bulb in the nose. When a scent arrives to the limbic system, your body responds by releasing unique chemicals into your brain, causing different reactions, depending on the aromas detected.

The same concept applies to aromas from essential oils! The sense of smell can have a profound impact on your emotions and inner desires. During these slow cold winter months, diffuse oils that can help to create an uplifting atmosphere! 

Some of our favorites are:

• Joy: Creates a joyful and happy aromatic experience when applied to wrists or heart

• Lemon: Diffuse it at work or school for a bright aroma that creates a sense of focus and motivation. Lemon essential oil has a cheerful, sweet aroma that can freshen and fill your home with its clean, lemon-drop scent when diffused.

• Lime: If you’re feeling uninspired, try diffusing Lime oil for a bright, refreshing aroma that may clear a path to greater creativity.

• Stress Away: Fill your workspace with a sweet, calming aroma that will encourage you to breathe deeply and relax.

• Grapefruit: Grapefruit has a fresh, invigorating aroma that encourages feelings of joy, satisfaction, and playfulness. Instantly brighten our kitchen, living room, or office by diffusing its citrus scent

• Jade Lemon: Diffuse to uplift and stimulate the mind and body.

• Citrus Fresh: Infuse joy and creativity into children's playtime by diffusing Citrus Fresh.

• Orange: Start your day with an uplifting burst of liquid sunshine by diffusing Orange as you get ready in the morning.`,
            'images': 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/p843x403/94143725_3401766043183986_4557433748185939968_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=sgTWTPkjy90AX_kN2gQ&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=e333016e0ff912d7daf658aebc517c4f&oe=60C98ADF'
            , 'links': ['']

        },     
];

    return (
        <div className='page'>
            <div class="blog_post">
                <h2 class="blog_title">
                    {lists[Number(props.match.params.post_id) - 1].title}
                </h2>
                <p class="blog_content">
                    <pre class="pretext">
                        {lists[Number(props.match.params.post_id) - 1].paragraph}
                    </pre>
                    {lists[Number(props.match.params.post_id) - 1].links.length > 0
                    ? lists[Number(props.match.params.post_id) - 1].links.map(url => 
                        <a href={url}>{url}</a>
                    )
                    : null
                    }

                </p>
                <div class="blog_footer" >
                    <img class="blog_image" src={lists[Number(props.match.params.post_id) - 1].images} />
                </div>

            </div>
                       
        </div>
    );
}

export default Post;


