/* Get 'Home' Page */

const homelist=(req,res)=>{
    res.render('loc-list',{
        title:'Nazdeeki, Find near Places',
        pageHeader:{
            title:'Nazdeeki',
            strapLine:'Find Places to work with wifi near you'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
      locations: [
        {
          name: 'Starcups',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          distance: '100m'
        },
        {
          name: 'Cafe Hero',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 4,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          distance: '200m'
        },
        {
          name: 'Burger Queen',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 2,
          facilities: ['Food', 'Premium wifi'],
          distance: '250m'
        }
      ]
    }
  );
};
const locationinfo=(req,res)=>{
    res.render('loc-info',{
        title: 'Starcups',
         pageHeader: {
          title: 'Nazdeeki',
        },
        sidebar: {
          context: 'is on Nazdeeki because it has accessible wifi and space to sit down with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
          name: 'Starcups',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          coords: {lat: 51.455041, lng: -0.9690884},
          openingTimes: [
            {
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
            },
            {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
            },
            {
              days: 'Sunday',
              closed: true
            }
          ],
          reviews: [
            {
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
            },
            {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }
          ]
        }
      }
    );
  };
const addreview=(req,res)=>{
    res.render('loc-review', {
        title: 'Review Starcups on Nazdeeki' ,
        pageHeader: { title: 'Review Starcups' }
      }
    );
  };
module.exports={
    homelist,
    locationinfo,
    addreview
};