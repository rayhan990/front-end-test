import { BookingResponse, Holiday, Hotel, HotelContent, HotelImage, Image } from '../types/booking';

const response : BookingResponse = JSON.parse(JSON.stringify({
	"holidays" : [
		{
			"totalPrice": 4919.64,
			"pricePerPerson": 2459.82,
			"depositPerPerson": 2459.82,
			"webDiscount": 0,
			"deposit": 4919.64,
			"hotel": {
				"id": "BT5419",
				"name": "The Beekman, A Thompson Hotel",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Beekman",
					"virginView": "Built in the same decade as the Brooklyn Bridge, The Beekman had stiff competition when it came to architectural neighbours &#x2013; but its glamour and grace granted it kudos with the building buffs of the 19th century &#x2013; and today. This skyscraper&#x2019;s kept its drama with its marble entrance, Persian rug-slung lobby, and Victorian balustrade-draped atrium, which stretches nine storeys skyward before being capped with a glass pyramid. It&#x2019;s not just opulent in design though, with its &#x2018;nothing&#x2019;s-too-much-trouble&#x2019; service and dining scene mirroring its old-world splendour and new-world luxury. Two of Manhattan&#x2019;s finest names are behind The Beekman&#x2019;s restaurants: Tom Colicchio reinterprets old and new classics at Temple Court, while Keith McNally recreates French brasserie elegance at Augustine. Or you could join the socialites (and sometimes celebs) at The Alley Cat for cocktails and Japanese Izakaya comfort food.",
					"telephoneBookableOnly": false,
					"vRating": "5",
					"hotelDescription": "Built in the same decade as the Brooklyn Bridge, The Beekman had stiff competition when it came to architectural neighbours &#x2013; but its glamour and grace granted it kudos with the building buffs of the 19th century &#x2013; and today.",
					"atAGlance": [
						"Has two of the city&#x2019;s top restauranteurs under one roof",
						"Hip bar/lounge scene",
						"Short walk away from the Brooklyn Bridge"
					],
					"location": {
						"lat": 40.711205,
						"lon": -74.00677
					},
					"parentLocation": "Financial District, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-1-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-2-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-3-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-4-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-5-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-6-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-7-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-8-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-9-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-10-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-11-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-12-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-13-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-14-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-15-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-16-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-17-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-18-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-19-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1121705/1121705-20-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-21-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1121705/1121705-22-results_carousel.jpg?version=5"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "the-beekman",
					"url": "/usa/new-york/financial-district/the-beekman",
					"parentUrlName": "financial-district",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1443,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 9839,
			"tierPoints": 180,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 7936.22,
			"pricePerPerson": 3968.11,
			"depositPerPerson": 3968.11,
			"webDiscount": 0,
			"deposit": 7936.22,
			"hotel": {
				"id": "H1015",
				"name": "The Ritz Carlton New York, Central Park",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Ritz Carlton New York, Central Park",
					"virginView": "The Ritz-Carlton New York, Central Park welcomes guests with a luxurious, but warm atmosphere befitting one of the world's most impressive destinations. Exquisite details including works of floral art by Jane Packer create a residential air complemented by glorious views of Central Park. The 1930s landmark building has been redesigned into a chic yet classic hotel, with contemporary rooms, a grand restaurant, and the only northeastern spa by Switzerland's La Prairie. Service is of the highest standard; you can even choose from a bath menu and let your 'bath butler' run it for you!",
					"telephoneBookableOnly": false,
					"vRating": "5+",
					"hotelDescription": "The Ritz-Carlton New York, Central Park welcomes guests with a luxurious, but warm atmosphere befitting one of the world's most impressive destinations.",
					"atAGlance": [
						"Luxurious hotel with glorious views of Central Park",
						"La Prairie Spa",
						"Auden Bistro &amp; Bar",
						"Luxurious Asprey bath amenities"
					],
					"location": {
						"lat": 40.765644,
						"lon": -73.97644
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-1-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-2-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-3-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-4-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-5-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-6-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-7-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-8-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-9-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-10-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-11-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-12-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17332/17332-13-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17332/17332-14-results_carousel.jpg?version=5"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "the-ritz-carlton-new-york-central-park",
					"url": "/usa/new-york/midtown/the-ritz-carlton-new-york-central-park",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1856,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 15872,
			"tierPoints": 300,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3874.2,
			"pricePerPerson": 1937.1,
			"depositPerPerson": 1937.1,
			"webDiscount": 0,
			"deposit": 3874.2,
			"hotel": {
				"id": "H1778",
				"name": "Kimpton Hotel Eventi",
				"boardBasis": "Non Refundable",
				"content": {
					"name": "Kimpton Hotel Eventi",
					"virginView": "It may sit in one of the world&#x2019;s priciest zip codes, but the radically revamped Kimpton Hotel Eventi has taken over an entire block of Manhattan &#x2013; proudly showing off that fact with a wall of street-level windows giving passers-by glimpses of its dining and drinking venues. Of course, as a guest, you get to experience the glitzy world beyond those windows (and beyond the view-grabbing floor-to-ceiling windows in every guestroom). Part chic hotel, part art gallery (both in keeping with its artsy Chelsea address), its new lobby feels more like a designer&#x2019;s living room thanks to the fashion-forward furniture, coffee table books, and warmly lit artworks. And, within four blocks of the Empire State Building, The High Line, and Macy&#x2019;s, there&#x2019;s no shortage of dining outside, but Chef Laurent Tourondel has made &#x2018;dining in&#x2019; a must, with his Italian-influenced and industrial-styled L&#x2019;Amico and The Vine.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "Encompassing an entire block of Sixth Avenue and crammed with conceptual art pieces, this hotel blends signature Kimpton hospitality with innovative nods to its neighbourhood.",
					"atAGlance": [
						"Floor to ceiling windows in all rooms",
						"Italian-inspired American dining",
						"Spa",
						"Complimentary bikes"
					],
					"location": {
						"lat": 40.74718,
						"lon": -73.989685
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/538284/538284-1-results_carousel.jpg?version=20"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/538284/538284-2-results_carousel.jpg?version=20"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538284/538284-3-results_carousel.jpg?version=20"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538284/538284-4-results_carousel.jpg?version=20"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538284/538284-5-results_carousel.jpg?version=20"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538284/538284-6-results_carousel.jpg?version=20"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/538284/538284-7-results_carousel.jpg?version=20"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538284/538284-8-results_carousel.jpg?version=18"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "kimpton-hotel-eventi",
					"url": "/usa/new-york/midtown/kimpton-hotel-eventi",
					"parentUrlName": "midtown",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Spa",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 4015,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7748,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3486.08,
			"pricePerPerson": 1743.04,
			"depositPerPerson": 1743.04,
			"webDiscount": 0,
			"deposit": 3486.08,
			"hotel": {
				"id": "H1014",
				"name": "Westin New York Times Square",
				"boardBasis": "Room Only",
				"content": {
					"name": "Westin New York Times Square",
					"virginView": "The Westin New York Times Square is an exhilarating achievement of art and architecture, and connected to the hotel is a 200,000sq ft multiplex, housing 13 cinema screens! As you would expect from one of the Big Apple's latest gems, all rooms are beautifully furnished with an excellent range of amenities - not forgetting the luxurious Westin Heavenly bed&#xae;, and heavenly it certainly is! Your only issue being that you may find it hard to leave it! Foundry Kitchen &amp; Bar is great place to relax and sip on a cocktail, the perfect alternative to a hectic night out on the town.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "The Westin New York at Times Square is an exhilarating achievement of art and architecture. Connected to the hotel is a 200,000sq ft multiplex, housing 13 cinema screens. As you would expect from one of the Big Apple's latest gems, all rooms are beautifully furnished with an excellent range of amenities. Not forgetting the luxurious Westin Heavenly bed&#xae; and heavenly it certainly is! Your only issue being that you may find it hard to leave it! Foundry Kitchen &amp; Bar is great place to relax and sip on a cocktail, the perfect alternative to a hectic night out on the town.",
					"atAGlance": [
						"In the heart of Times Square",
						"Entertainment complex",
						"WestinWORKOUT&#xae; Fitness centre",
						"Foundry kitchen and bar"
					],
					"location": {
						"lat": 40.7574,
						"lon": -73.9885
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/8902/8902-1-results_carousel.jpg?version=44"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-2-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-3-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-4-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-5-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-6-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-7-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-8-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-9-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-10-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-11-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-12-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-13-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-14-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-15-results_carousel.jpg?version=43"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-16-results_carousel.jpg?version=24"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-17-results_carousel.jpg?version=24"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-18-results_carousel.jpg?version=24"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8902/8902-19-results_carousel.jpg?version=24"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "westin-new-york-times-square",
					"url": "/usa/new-york/midtown/westin-new-york-times-square",
					"parentUrlName": "midtown",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Room Service",
						"Valet parking",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"resortFees": false,
					"video": {
						"url": "//www.youtube.com/embed/AAqfgriUsiQ\n",
						"preview": "//img.youtube.com/vi/AAqfgriUsiQ\n/0.jpg"
					},
					"salesMessages": [
						{
							"name": "NY Westin Times Square Vhols EXCL.",
							"description": "The Destination fee is included in the price and includes:&#xa0;\t$30 Food &amp; Beverage credit redeemable in Foundry Kitchen or Foundry Bar (per room per day). $10 Laundry credit (per room per day). Premium Wi-Fi. Local, long distance and international phone calls. Choice of one of the following (per room per day) (1) ticket to One World Observatory. (1) ticket to the American Museum of National History. (1) ticket to Madame Tussauds. (1) pass Double Decker Bus Tour .** Benefits are daily and cannot be rolled over, any unused portion has no value upon check out. Inclusions are subject to change.\n",
							"salesMessageDescription": "The Destination fee is included in the price and includes:&#xa0;\t$30 Food &amp; Beverage credit redeemable in Foundry Kitchen or Foundry Bar (per room per day). $10 Laundry credit (per room per day). Premium Wi-Fi. Local, long distance and international phone calls. Choice of one of the following (per room per day) (1) ticket to One World Observatory. (1) ticket to the American Museum of National History. (1) ticket to Madame Tussauds. (1) pass Double Decker Bus Tour .** Benefits are daily and cannot be rolled over, any unused portion has no value upon check out. Inclusions are subject to change.\n",
							"displayAfter": "20-12-2021",
							"displayUntil": "30-04-2023",
							"type": "Special Offer",
							"typeUrlName": "special-offer",
							"originalOrder": 14
						},
						{
							"name": "NY 2022 Westin NY Times Square Room Upgrade",
							"description": "Room Upgrade: Receive a complimentary room upgrade for completed stays between 05 May '22&#x2013;29 Apr '24, when booking by 30 Jun '22.Any applicable offers have been calculated into the prices shown. Offers may not be combinable. Upgrades are subject to availability.",
							"salesMessageDescription": "Room Upgrade: Receive a complimentary room upgrade for completed stays between 05 May '22&#x2013;29 Apr '24, when booking by 30 Jun '22.Any applicable offers have been calculated into the prices shown. Offers may not be combinable. Upgrades are subject to availability.",
							"displayAfter": "04-05-2022",
							"displayUntil": "30-06-2022",
							"type": "Special Offer",
							"typeUrlName": "special-offer",
							"originalOrder": 16
						}
					],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "family",
							"value": "The Family Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 3918,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6972,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3813.99,
			"pricePerPerson": 1906.99,
			"depositPerPerson": 1907,
			"webDiscount": 0,
			"deposit": 3813.99,
			"hotel": {
				"id": "PGHY57814",
				"name": "Hyatt Centric Times Square New York",
				"boardBasis": "Room Only",
				"content": {
					"name": "Hyatt Centric Times Square New York",
					"virginView": "In a city where it's all about location, nothing beats a stay in Manhattan's theatre district, moments from the most guidebook-worthy sights, shops, and dining. You can survey all that surrounds you from Bar 54. Fittingly named, it sits on the 54th floor of Hyatt Centric Times Square &#x2013; making it the highest hotel rooftop lounge in the whole of NYC. It doesn't just give you magical Manhattan views though, it also delivers small plates, handcrafted cocktails, and unique seating in igloo-style bubbles. You can get a view on Manhattan from your guest room too, with its floor-to-ceiling windows sure to distract from the complimentary Wi-Fi. When you're not staring at or exploring the city, the hotel's also home to Times Square's only full-service spa.",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "The new kid on the block &#x2013; this is one of Times Square&#x2019;s freshest faces. And, in a city where it&#x2019;s all about location, nothing beats a stay in Manhattan&#x2019;s theatre district, moments from the most guidebook-worthy sights, shops, and dining. You can survey all that surrounds you from Bar 54.",
					"atAGlance": [
						"In Times Square",
						"NYC&#x2019;s highest hotel rooftop lounge",
						"Rooms have floor-to-ceiling windows",
						"Fully-equipped fitness centre"
					],
					"location": {
						"lat": 40.757538,
						"lon": -73.98418
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-1-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-2-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-3-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-4-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-5-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-6-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-7-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-8-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-9-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986628/986628-10-results_carousel.jpg?version=17"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "hyatt-centric-times-square-new-york",
					"url": "/usa/new-york/midtown/hyatt-centric-times-square-new-york",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Valet parking",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 6103,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7628,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 5492.78,
			"pricePerPerson": 2746.39,
			"depositPerPerson": 2746.39,
			"webDiscount": 0,
			"deposit": 5492.78,
			"hotel": {
				"id": "H0537",
				"name": "JW Marriott Essex House",
				"boardBasis": "Room Only",
				"content": {
					"name": "JW Marriott Essex House",
					"virginView": "Elegant Art Deco-style and top-notch service characterise this 1930s hotel overlooking Central Park. There's fine dining, a late night menu and room service to keep you fully fueled, as well as PRIMP spa to ensure there's enough relaxation versus city-hustle-and-bustle busyness. The rooms are all designed in a contemporary style, with modern features and amenities, and some even have sweeping views of Central Park &#x2014; what a view to wake up to each morning!",
					"telephoneBookableOnly": false,
					"vRating": "5+",
					"hotelDescription": "Elegant Art Deco-style and top-notch service characterise this 1930s hotel overlooking Central Park. There's fine dining, a late night menu and room service to keep you fully fueled, as well as PRIMP spa to ensure there's enough relaxation versus city-hustle-and-bustle busyness. The rooms are all designed in a contemporary style, with modern features and amenities, and some even have sweeping views of Central Park &#x2014; what a view to wake up to each morning!",
					"atAGlance": [
						"Located on Central Park South",
						"Elegant 1930's Art Deco style hotel",
						"Room upgrades with Central Park views",
						"PRIMP spa"
					],
					"location": {
						"lat": 40.76669,
						"lon": -73.978226
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-1-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-2-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-3-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-4-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-5-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-6-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-7-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-8-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-9-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-10-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-11-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-12-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-13-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-14-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-15-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-16-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-17-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-18-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8613/8613-19-results_carousel.jpg?version=7"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "jw-marriott-essex-house",
					"url": "/usa/new-york/midtown/jw-marriott-essex-house",
					"parentUrlName": "midtown",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 2333,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 10986,
			"tierPoints": 200,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3583.09,
			"pricePerPerson": 1791.54,
			"depositPerPerson": 1791.55,
			"webDiscount": 0,
			"deposit": 3583.09,
			"hotel": {
				"id": "H4788",
				"name": "The Algonquin Hotel",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Algonquin Hotel",
					"virginView": "One of New York&#x2019;s prized historic buildings, The Algonquin first opened its doors to the public on November 22, 1902. Attracting the glitterati with its luxury accommodation and Time Square location, it&#x2019;s been popular ever since and not just with humans! Yes, you read that right &#x2013; several cats have also called The Algonquin home &#x2013; each named Hamlet or Matilda according to gender and afforded the same hospitality as everyone else. Guest rooms are second to none in the city, effortlessly combining old world elegance with cutting edge amenities and stunning city views. There&#x2019;s a fitness centre for the enthusiast or simply order a cocktail from the iconic Blue Bar, one of the most desirable meeting places in NYC and indulge in a bit of people watching instead. The Round Table Restaurant is another sought-after destination, once the haunt of literary and theatrical notables it is now one of the places to see and be seen.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "One of New York&#x2019;s prized historic buildings, The Algonquin first opened its doors to the public on November 22, 1902. Attracting the glitterati with its luxury accommodation and Time Square location, it&#x2019;s been popular ever since and not just with humans! Yes, you read that right &#x2013; several cats have also called The Algonquin home &#x2013; each named Hamlet or Matilda according to gender and afforded the same hospitality as everyone else.",
					"atAGlance": [
						"3 dining options",
						"Fitness centre",
						"Short stroll from Times Square",
						"Complimentary WiFi"
					],
					"location": {
						"lat": 40.756035,
						"lon": -73.98228
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810946/810946-1-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810946/810946-2-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810946/810946-3-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810946/810946-4-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810946/810946-5-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810946/810946-6-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810946/810946-7-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810946/810946-8-results_carousel.jpg?version=6"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "the-algonquin-hotel",
					"url": "/usa/new-york/midtown/the-algonquin-hotel",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 2336,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7166,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 2665.22,
			"pricePerPerson": 1332.61,
			"depositPerPerson": 1332.61,
			"webDiscount": 0,
			"deposit": 2665.22,
			"hotel": {
				"id": "BT9574",
				"name": "Staypineapple, An Artful Hotel, Midtown New York",
				"boardBasis": "Promo 1",
				"content": {
					"name": "Staypineapple, An Artful Hotel, Midtown New York",
					"virginView": "Comfortable rooms, convenient location, and enjoyable amenities combine to give you the Staypineapple in Midtown New York; the ideal base to explore the Big (Pine)Apple! When we mention convenience, this goes further than just the location &#x2013; An Everything person at reception is always on hand to arrange food delivery to your room or give local recommendations. Although if you don&#x2019;t even want to leave the comfort (the cosy robes make them extremely comfortable) of your room, food and drinks can also be ordered by simply scanning a QR code on your phone. When you are in the mood to explore, Hudson Yards and Times Square are just minutes away on foot.&#xa0;",
					"telephoneBookableOnly": false,
					"vRating": "3",
					"hotelDescription": "",
					"atAGlance": [
						"Butler room service",
						"Central Midtown location, close to Times Square &amp; Hudson Yards",
						"Arty interior"
					],
					"location": {
						"lat": 40.7542,
						"lon": -73.994
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt9574/bt9574-1-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt9574/bt9574-2-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt9574/bt9574-3-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt9574/bt9574-4-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt9574/bt9574-5-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt9574/bt9574-6-results_carousel.jpg?version=4"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Bicycle Rental",
							"name": "bicycle-rental"
						}
					],
					"urlName": "staypineapple-an-artful-hotel-midtown-new-york",
					"url": "/usa/new-york/midtown/staypineapple-an-artful-hotel-midtown-new-york",
					"parentUrlName": "midtown",
					"holidayType": [],
					"boardBasis": [],
					"hotelLocation": [],
					"accommodationType": [],
					"hotelFacilities": [
						"Room Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [
						"Bicycle Rental"
					],
					"features": [],
					"starRating": "3",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 440,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 5330,
			"tierPoints": 100,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3927.41,
			"pricePerPerson": 1963.7,
			"depositPerPerson": 1963.71,
			"webDiscount": 0,
			"deposit": 3927.41,
			"hotel": {
				"id": "H4663",
				"name": "Westin New York Grand Central",
				"boardBasis": "Room Only",
				"content": {
					"name": "Westin New York Grand Central",
					"virginView": "Thanks to its amazing midtown Manhattan location, this brand spanking new Westin hotel places guests right at the action-packed heart of NYC with a full quota of modern amenities and features to ensure your stay is one to really remember.",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "Thanks to its amazing midtown Manhattan location, this brand spanking new Westin hotel places guests right at the action-packed heart of NYC with a full quota of modern amenities and features to ensure your stay is one to really remember.",
					"atAGlance": [
						"In the heart of Midtown Manhattan",
						"WestinWORKOUT&#xae; Fitness Studio",
						"THE LCL: Bar &amp; Kitchen"
					],
					"location": {
						"lat": 40.750374,
						"lon": -73.97387
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/769549/769549-1-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/769549/769549-2-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/769549/769549-3-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/769549/769549-4-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/769549/769549-5-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/769549/769549-6-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/769549/769549-7-results_carousel.jpg?version=16"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "westin-new-york-grand-central",
					"url": "/usa/new-york/midtown/westin-new-york-grand-central",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Valet parking",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"video": {
						"url": "//www.youtube.com/embed/rlSdxNFYvsQ",
						"preview": "//img.youtube.com/vi/rlSdxNFYvsQ/0.jpg"
					},
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 5187,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7855,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3733.09,
			"pricePerPerson": 1866.54,
			"depositPerPerson": 1866.55,
			"webDiscount": 0,
			"deposit": 3733.09,
			"hotel": {
				"id": "H3020",
				"name": "Residence Inn by Marriott Central Park",
				"boardBasis": "Room Only",
				"content": {
					"name": "Residence Inn by Marriott Central Park",
					"virginView": "These spacious urban designed studio rooms are the perfect Manhattan home-from-home. Everything is within walking distance or head on over to Penn Station if you want to venture further afield. Although you can self-cater if you choose to, each day gets off to a great start with a complimentary hot buffet breakfast on offer. There&#x2019;s also a NYC loft-style lounge to relax in later with a good book or the local newspaper. Complimentary WiFi means you can stay in touch with the folks back home and an up-to-the-minute flat screen TV enables you to catch up on the latest movies. Then again, as being in New York, is like being in a movie, you&#x2019;ll feel like a star 24/7!",
					"telephoneBookableOnly": false,
					"vRating": "3+",
					"hotelDescription": "These spacious urban designed studio rooms are the perfect Manhattan home-from-home. Everything is within walking distance or head on over to Penn Station if you want to venture further afield. Although you can self-cater if you choose to, each day gets off to a great start with a complimentary hot buffet breakfast on offer. There&#x2019;s also a NYC loft-style lounge to relax in later with a good book or the local newspaper. Complimentary WiFi means you can stay in touch with the folks back home and an up-to-the-minute flat-screen TV enables you to catch up on the latest movies. Then again, as being in New York, is like being in a movie, you&#x2019;ll feel like a star 24/7!",
					"atAGlance": [
						"Tallest hotel in North America",
						"Complimentary hot buffet breakfast",
						"Suites with kitchenettes",
						"Views of Times Square, Central Park or the Manhattan skyline from your suite"
					],
					"location": {
						"lat": 40.76437,
						"lon": -73.98265
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710398/710398-1-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710398/710398-2-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710398/710398-3-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710398/710398-4-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710398/710398-5-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710398/710398-6-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/710398/710398-7-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710398/710398-8-results_carousel.jpg?version=3"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "residence-inn-by-marriott-central-park",
					"url": "/usa/new-york/midtown/residence-inn-by-marriott-central-park",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Bed and Breakfast"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1756,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7466,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3690.12,
			"pricePerPerson": 1845.06,
			"depositPerPerson": 1845.06,
			"webDiscount": 0,
			"deposit": 3690.12,
			"hotel": {
				"id": "HSMNYCMQ",
				"name": "Marriott Marquis New York",
				"boardBasis": "Room Only",
				"content": {
					"name": "Marriott Marquis New York",
					"virginView": "Bright lights, the city that never sleeps, and the most iconic skyline in the world. When you stay at the Marriott Marquis, you&#x2019;re just steps away from it all. With New York&#x2019;s only revolving restaurant, you can sip on a cocktail and watch the world go by below. Grab some food on the go from Starbucks&#xae; before heading out into the city. And when you need to get some down time from the urban jungle, head to your room or family suite for some rest and relaxation.",
					"telephoneBookableOnly": false,
					"vRating": "5",
					"hotelDescription": "Bright lights, the city that never sleeps, and the most iconic skyline in the world. When you stay at the Marriott Marquis, you&#x2019;re just steps away from it all.",
					"atAGlance": [
						"In New York's Times Square area",
						"NYC's only revolving restaurant and bar",
						"24-hour fitness centre",
						"Family rooms and suites"
					],
					"location": {
						"lat": 40.758595,
						"lon": -73.985825
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-1-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-2-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-3-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-4-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-5-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-6-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-7-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-8-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-9-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-10-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-11-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-12-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-13-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-14-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-15-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-16-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-17-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-18-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-19-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241536/1241536-20-results_carousel.jpg?version=7"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "marriott-marquis-new-york",
					"url": "/usa/new-york/midtown/marriott-marquis-new-york",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Family Room or Suite"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Valet parking",
						"Fitness Centre/Gym"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"promoSticker": {
						"id": "new",
						"value": "New"
					},
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 13258,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7380,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 2741.45,
			"pricePerPerson": 1370.72,
			"depositPerPerson": 1370.73,
			"webDiscount": 0,
			"deposit": 2741.45,
			"hotel": {
				"id": "H2174",
				"name": "Element New York Times Square West",
				"boardBasis": "Room Only",
				"content": {
					"name": "Element New York Times Square West",
					"virginView": "Close to the bright lights of Times Square, this isn&#x2019;t just any hotel; this is an eco-friendly, live-like-a-local hotel. The Element by Westin brings everything you&#x2019;ll need (and maybe hadn&#x2019;t even thought of) into one place, with a kitchenette and loveseat sofa in every room. And that&#x2019;s not to mention the complimentary breakfast you receive each day at Rise. Step out of the front doors and within a New York minute you&#x2019;ll be in the heart of The City That Never Sleeps.",
					"telephoneBookableOnly": false,
					"vRating": "3",
					"hotelDescription": "Close to the bright lights of Times Square, this isn&#x2019;t just any hotel; this is an eco-friendly, live-like-a-local hotel. The Element by Westin brings everything you&#x2019;ll need (and maybe hadn&#x2019;t even thought of) into one place, with a kitchenette and loveseat sofa in every room.",
					"atAGlance": [
						"Located just steps from Times Square",
						"Complimentary daily hot buffet breakfast",
						"Complimentary WiFi",
						"Kitchenette in all rooms"
					],
					"location": {
						"lat": 40.75532,
						"lon": -73.993286
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/365768/365768-1-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/365768/365768-2-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/365768/365768-3-results_carousel.jpg?version=12"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "element-new-york-times-square-west",
					"url": "/usa/new-york/midtown/element-new-york-times-square-west",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Bed and Breakfast"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Bar",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "3",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 5292,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 5483,
			"tierPoints": 100,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 4499.13,
			"pricePerPerson": 2249.56,
			"depositPerPerson": 2249.57,
			"webDiscount": 0,
			"deposit": 4499.13,
			"hotel": {
				"id": "H1513",
				"name": "Lotte New York Palace",
				"boardBasis": "Room Only",
				"content": {
					"name": "Lotte New York Palace",
					"virginView": "Railroad magnate Henry Villard's 19th-century mansions were combined with a sleek tower to create one of the city's best hotels. It's a place where the staff greet you as if they have known you all their lives, and nothing is too much trouble. The location is one of the best in Manhattan, right in the middle of Midtown, but hidden away in a gated courtyard. There's dining options suited to all at the Lotte New York Palace, from luxury brunch to baked goods, whatever you opt for you'll be in for a treat. Enjoy handmade cocktails in one of Manhattan's most popular bars, Trouble's Trust, or relax in 19th century-style surroundings in Rarities - either make for the perfect post-day-in-the-city tipples.",
					"telephoneBookableOnly": false,
					"vRating": "5+",
					"hotelDescription": "Railroad magnate Henry Villard's 19th-century mansions were combined with a sleek tower to create one of the city's best hotels. It's a place where the staff greet you as if they have known you all their lives, and nothing is too much trouble. The location is one of the best in Manhattan, right in the middle of Midtown, but hidden away in a gated courtyard.",
					"atAGlance": [
						"Some of Manhattan's best restaurants and bars",
						"Spa with in-room spa services",
						"In the heart of Midtown",
						"Suite upgrades"
					],
					"location": {
						"lat": 40.75804,
						"lon": -73.975266
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-1-results_carousel.jpg?version=21"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-2-results_carousel.jpg?version=21"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-3-results_carousel.jpg?version=21"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-4-results_carousel.jpg?version=21"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-5-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-6-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-7-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-8-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-9-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-10-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-11-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-12-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-13-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-14-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-15-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-16-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8614/8614-17-results_carousel.jpg?version=5"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Babysitting service",
							"name": "babysitting-service"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "lotte-new-york-palace",
					"url": "/usa/new-york/midtown/lotte-new-york-palace",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [
						"Babysitting service"
					],
					"activities": [],
					"features": [],
					"resortFees": false,
					"salesMessages": [
						{
							"name": "New York 2022 Lotte Palace 15% off 3+ Nts",
							"description": "<p><strong>Booking Bonus:</strong>&#xa0;Book by 31 Dec '22 to receive up to 15% off theaccommodation cost between 1 Jan&#x2013;31 Dec '22 when staying 3 nights or more.</p><p>Any applicable offers havebeen calculated into the prices shown. Offers may not be combinable.&#xa0;</p>",
							"salesMessageDescription": "<p><strong>Booking Bonus:</strong>&#xa0;Book by 31 Dec '22 to receive up to 15% off theaccommodation cost between 1 Jan&#x2013;31 Dec '22 when staying 3 nights or more.</p><p>Any applicable offers havebeen calculated into the prices shown. Offers may not be combinable.&#xa0;</p>",
							"displayAfter": "09-01-2022",
							"displayUntil": "31-12-2022",
							"type": "Special Offer",
							"typeUrlName": "special-offer",
							"originalOrder": 5
						}
					],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "grown-up",
							"value": "The Grown Up Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 5797,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 8998,
			"tierPoints": 160,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3912.81,
			"pricePerPerson": 1956.4,
			"depositPerPerson": 1956.41,
			"webDiscount": 0,
			"deposit": 3912.81,
			"hotel": {
				"id": "H1056",
				"name": "Renaissance New York Times Square",
				"boardBasis": "Room Only",
				"content": {
					"name": "Renaissance New York Times Square",
					"virginView": "This stylish boutique hotel is an urban oasis rising 26 stories above Times Square. It is this attention to detail that puts Renaissance Hotel New York simply in a class of it's own. Enjoy Stunning Panoramic views of Times Square in the restaurant before venturing out to Rockefeller Center or the Theater District, both just steps away. The bespoke furniture and chandeliers in the main areas of the hotel have been lovingly hand crafted.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "This stylish boutique hotel is an urban oasis rising 26 stories above Times Square.",
					"atAGlance": [
						"On the edge of Times Square",
						"R Lounge at Two Times Square",
						"Fitness centre",
						"Salon and Barber Shop"
					],
					"location": {
						"lat": 40.759632,
						"lon": -73.98451
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8900/8900-1-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8900/8900-2-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8900/8900-3-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8900/8900-4-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8900/8900-5-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8900/8900-6-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8900/8900-7-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8900/8900-8-results_carousel.jpg?version=6"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "renaissance-new-york-times-square",
					"url": "/usa/new-york/midtown/renaissance-new-york-times-square",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre",
						"Located On Broadway"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Safety Deposit Box",
						"Fitness Centre/Gym"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 2819,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7826,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3036.01,
			"pricePerPerson": 1518,
			"depositPerPerson": 1518.01,
			"webDiscount": 0,
			"deposit": 3036.01,
			"hotel": {
				"id": "HSMNYCOX",
				"name": "MOXY NYC Times Square",
				"boardBasis": "Room Only",
				"content": {
					"name": "MOXY NYC Times Square",
					"virginView": "Quirky, cool and exciting, the Moxy Times Square offers an experience you&#x2019;ll never forget. Nowhere else in the Big Apple has anything quite like it &#x2014; an urban amusement park complete with pitch and putt and a carousel, a tattoo parlour, and a topiary garden. Your room is a trendy, modern haven, perfect to head back to after a day of sightseeing. And in the evening, you can head up to the rooftop bar to sip on a cocktail, and admire the twinkling skyline surrounding you, topped off with a view of the iconic Empire State Building.",
					"telephoneBookableOnly": false,
					"vRating": "3",
					"hotelDescription": "Quirky, cool and exciting, the Moxy Times Square offers an experience you&#x2019;ll never forget. Nowhere else in the Big Apple has anything quite like it &#x2014; an urban amusement park complete with pitch and putt and a carousel, a tattoo parlour, and a topiary garden.",
					"atAGlance": [
						"Trendy hotel in Midtown, close to Times Square",
						"Rooftop indoor/outdoor bar",
						"Six dining options",
						"Rooftop 'urban amusement park'"
					],
					"location": {
						"lat": 40.752365,
						"lon": -73.98911
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-1-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-2-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-3-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-4-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-5-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-6-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-7-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-8-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-9-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-10-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-11-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-12-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-13-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-14-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-15-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-16-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-17-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-18-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-19-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-20-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-21-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-22-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-23-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-24-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1226156/1226156-25-results_carousel.jpg?version=4"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "moxy-nyc-times-square",
					"url": "/usa/new-york/midtown/moxy-nyc-times-square",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"promoSticker": {
						"id": "new",
						"value": "New"
					},
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 2197,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6072,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3076.07,
			"pricePerPerson": 1538.03,
			"depositPerPerson": 1538.04,
			"webDiscount": 0,
			"deposit": 3076.07,
			"hotel": {
				"id": "H5125",
				"name": "Hampton Inn Times Square Central",
				"boardBasis": "Bed and Breakfast",
				"content": {
					"name": "Hampton Inn Times Square Central",
					"virginView": "With Manhattan&#x2019;s all-singing, all-dancing Theater District literally on its doorstep, Hampton Inn Times Square Central is perfectly placed for bright lights and city sights. Shops, dining, shows, iconic buildings: it&#x2019;s all on hand, with the two block stretch of eateries known as Restaurant Row just six minutes&#x2019; stroll away. If you&#x2019;d rather eat back at base, the hotel&#x2019;s convenience store has snacks, drinks and pre-packed meals. There&#x2019;s no unnecessary fuss or frills here, but there are plenty of freebies: there&#x2019;s the free hot breakfasts each morning, with classics like waffles; there&#x2019;s the free WiFi; there&#x2019;s the free tea and coffee on tap, day and night, in the lobby; and there&#x2019;s the free in-room movie channel, for any nights you can&#x2019;t get Broadway tickets.",
					"telephoneBookableOnly": false,
					"vRating": "3",
					"hotelDescription": "This modern hotel is perfectly placed for bright lights and city sights. Shops, shows and iconic buildings are all on hand, with Restaurant Row&apos;s two-block stretch of eateries a short walk away.",
					"atAGlance": [
						"Right by Times Square and Broadway",
						"Close to Madison Square Gardens and Restaurant Row",
						"Complimentary hot breakfasts",
						"Complimentary WiFi"
					],
					"location": {
						"lat": 40.755604,
						"lon": -73.98861
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/888572/888572-1-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/888572/888572-2-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/888572/888572-3-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/888572/888572-4-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/888572/888572-5-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/888572/888572-6-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/888572/888572-7-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/888572/888572-8-results_carousel.jpg?version=13"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/888572/888572-9-results_carousel.jpg?version=13"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "hampton-inn-times-square-central",
					"url": "/usa/new-york/midtown/hampton-inn-times-square-central",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Bed and Breakfast"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Valet parking",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "3",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 3361,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6152,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 5039.79,
			"pricePerPerson": 2519.89,
			"depositPerPerson": 2519.9,
			"webDiscount": 0,
			"deposit": 5039.79,
			"hotel": {
				"id": "H1494",
				"name": "InterContinental The Barclay",
				"boardBasis": "Room Only",
				"content": {
					"name": "Intercontinental The Barclay",
					"virginView": "The Barclay first opened its doors in 1926 under the aegis of the Vanderbilt family, quickly achieving a reputation as a hotel of distinction and exclusivity. Bette Davis, Marlon Brando and other celebrities have enjoyed its brand of hospitality in the past, now it&apos;s your turn! The hotel manages to combine old-world glamour with modern 21st-century functionality. Guests can enjoy an elegant residential design and state-of-the-art room facilities. There is also a health club for you to take advantage of. The Gin Parlour, with its club-like setting, is a great place to enjoy a pre-dinner drink before heading to one of the many restaurants and nightspots in the local vicinity.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "The Barclay first opened its doors in 1926 under the aegis of the Vanderbilt family, quickly achieving a reputation as a hotel of distinction and exclusivity. Bette Davis, Marlon Brando and other celebrities have enjoyed its brand of hospitality in the past, now it&apos;s your turn! The hotel manages to combine old-world glamour with modern 21st-century functionality. Guests can enjoy an elegant residential design and state-of-the-art room facilities. There is also a health club for you to take advantage of. The Gin Parlour, with its club-like setting, is a great place to enjoy a pre-dinner drink before heading to one of the many restaurants and nightspots in the local vicinity.",
					"atAGlance": [
						"On East 48th Street, just steps from Rockefeller Centre and Grand Central Station",
						"Historic landmark hotel",
						"Close to Madison Avenue shopping and fine dining and Broadway Theatres",
						"The Gin Parlour"
					],
					"location": {
						"lat": 40.75576,
						"lon": -73.97415
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-1-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-2-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-3-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-4-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-5-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-6-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-7-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-8-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8901/8901-9-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/8901/8901-10-results_carousel.jpg?version=9"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Babysitting service",
							"name": "babysitting-service"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "intercontinental-the-barclay",
					"url": "/usa/new-york/midtown/intercontinental-the-barclay",
					"parentUrlName": "midtown",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Room Service",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [
						"Babysitting service"
					],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 2569,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 10080,
			"tierPoints": 200,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3565.17,
			"pricePerPerson": 1782.58,
			"depositPerPerson": 1782.59,
			"webDiscount": 0,
			"deposit": 3565.17,
			"hotel": {
				"id": "H4787",
				"name": "The Lexington New York City",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Lexington New York City",
					"virginView": "Guest accommodation at The Lexington New York City is in-keeping with the fast-pace of the Big Apple with state-of-the-art amenities blending with designer comforts to ensure a relaxed and comfortable stay. Aside from the super cool guest rooms you'll discover a good choice of classic cocktails and modern NYC dishes available around the clock. One too many New York cheesecakes or early morning bagels? Forget about it! But if you simply can't then check into the Lexington's 24-hour fitness room for a work out prior to diving in for round two. No matter what you're in town for, you'll find yourself right at the heart of the action with a huge array of iconic landmarks, picturesque parks and Manhattan favourites just steps from your front door.",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "With state-of-the-art amenities blending with designer comforts, you are sure a comfortable stay at The Lexington New York City. Aside from the super cool guest rooms you'll discover a good choice of dining venues with Chinese cuisine, classic cocktails and modern NYC dishes available around the clock.",
					"atAGlance": [
						"Great location",
						"The Stayton Room",
						"Fitness centre",
						"Short walk from Grand Central Station"
					],
					"location": {
						"lat": 40.754955,
						"lon": -73.973045
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810944/810944-1-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810944/810944-2-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810944/810944-3-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810944/810944-4-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810944/810944-5-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810944/810944-6-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810944/810944-7-results_carousel.jpg?version=12"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "the-lexington-new-york-city",
					"url": "/usa/new-york/midtown/the-lexington-new-york-city",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 6210,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7130,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 5734.18,
			"pricePerPerson": 2867.09,
			"depositPerPerson": 2867.09,
			"webDiscount": 0,
			"deposit": 5734.18,
			"hotel": {
				"id": "H5913",
				"name": "The New York EDITION",
				"boardBasis": "Room Only",
				"content": {
					"name": "The New York EDITION",
					"virginView": "A taste of elite New York living, the residential feel of The New York EDITION sets it apart from your average Manhattan hotel. Inside an historic clocktower, near the Flatiron building and Madison Square Park, its grand interiors are swathed in neutral, warm, ivory and oatmeal. The elegant guestrooms are just as decadent, featuring oversized windows, rain showers, complimentary WiFi, 48&#x201d; HDTVs, and BEATS Bluetooth speakers. Its spa is reserved exclusively for hotel guests, but there&#x2019;s no keeping New York&#x2019;s gastro-aficionados from The Clocktower: with Michelin starred Jason Atherton at the helm, its classic-meets-contemporary British menu is served in three exquisite dining rooms (and the Lobby Bar). The centrepiece of the dining experience is the Gold Bar, with its gilt-framed photos, 3 foot globe chandelier, glistening cocktails, and 24k gold leaf bar ensuring it lives up to its name.",
					"telephoneBookableOnly": false,
					"vRating": "5",
					"hotelDescription": "A taste of elite New York living, the residential feel of The New York EDITION sets it apart from your average Manhattan hotel. Inside an historic clocktower, near the Flatiron building and Madison Square Park, its grand interiors are swathed in neutral, warm, ivory and oatmeal. Its spa is reserved exclusively for hotel guests but there's no keeping New York's gastro-aficionados from The Clocktower, with Michelin starred Jason Atherton at the helm.",
					"atAGlance": [
						"Elegant guestrooms in an historic 41-storey clocktower",
						"In Midtown Manhattan&#x2019;s Flatiron district, by Madison Square Park",
						"Spa",
						"Complimentary WiFi"
					],
					"location": {
						"lat": 40.74126,
						"lon": -73.987305
					},
					"parentLocation": "Union Square, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-1-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-2-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-3-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-4-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-5-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-6-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-7-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-8-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-9-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-10-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-11-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-12-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/907636/907636-13-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/907636/907636-14-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-15-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/907636/907636-16-results_carousel.jpg?version=7"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "the-new-york-edition",
					"url": "/usa/new-york/union-square/the-new-york-edition",
					"parentUrlName": "union-square",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Room Service",
						"Valet parking",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1529,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 11468,
			"tierPoints": 220,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 4725.44,
			"pricePerPerson": 2362.72,
			"depositPerPerson": 2362.72,
			"webDiscount": 0,
			"deposit": 4725.44,
			"hotel": {
				"id": "PGNYLGALG",
				"name": "The Gardens Sonesta ES Suites New York",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Gardens Sonesta ES Suites New York",
					"virginView": "In a quiet corner of New York, but close enough to the sights not to have to bother hailing a yellow cab, Garden Sonesta ES Suites is a rare refuge from the Big Apple buzz. Hidden away on a tree-trimmed road on the Upper East Side, you can escape to the chic calm of your suite, where homely comforts include your own kitchen, and luxuries include grocery and breakfast deliveries. Downstairs,&#xa0;Take advantage of the fitness centre and Serenity lounge, both located off the lobby. Serenity lounge offers a comfortable place to relax, watch tv and there is access to a computer.",
					"telephoneBookableOnly": false,
					"vRating": "3+",
					"hotelDescription": "In a quiet corner of New York, but close enough to the sights not to have to bother hailing a yellow cab, Gardens Suites Hotel by Affinia is a rare refuge from the Big Apple buzz. Hidden away on a tree-trimmed road on the Upper East Side, you can escape to the chic calm of your suite, where homely comforts include your own kitchen, and luxuries include grocery and breakfast deliveries.",
					"atAGlance": [
						"Quiet residential setting",
						"Suites with kitchens",
						"Complimentary bikes",
						"Serenity Lounge with complimentary tea and coffee"
					],
					"location": {
						"lat": 40.764362,
						"lon": -73.96301
					},
					"parentLocation": "Upper East Side, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925710/925710-1-results_carousel.jpg?version=27"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925710/925710-2-results_carousel.jpg?version=27"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925710/925710-3-results_carousel.jpg?version=27"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925710/925710-4-results_carousel.jpg?version=27"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925710/925710-5-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925710/925710-6-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925710/925710-7-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925710/925710-8-results_carousel.jpg?version=12"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "the-gardens-sonesta-es-suites-new-york",
					"url": "/usa/new-york/upper-east-side/the-gardens-sonesta-es-suites-new-york",
					"parentUrlName": "upper-east-side",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [],
					"hotelFacilities": [
						"Room Service",
						"Valet parking",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "3",
					"resortFees": false,
					"salesMessages": [
						{
							"name": "NY 2022 Gardens Suites Hotel by Affinia May Campaign",
							"description": "Booking Bonus: Receive $10 daily Cupboard Credit per room and early room check-in when staying a minimum of 5 nights between 1 May-31 Dec &#x2019;22 booked between 30 Apr &#x2013; 06 Jun&#x2018;22.Any applicable offers have been calculated into the prices shown. Offers may not be combinable.",
							"salesMessageDescription": "Booking Bonus: Receive $10 daily Cupboard Credit per room and early room check-in when staying a minimum of 5 nights between 1 May-31 Dec &#x2019;22 booked between 30 Apr &#x2013; 06 Jun&#x2018;22.Any applicable offers have been calculated into the prices shown. Offers may not be combinable.",
							"displayAfter": "30-04-2022",
							"displayUntil": "06-06-2022",
							"type": "Special Offer",
							"typeUrlName": "special-offer",
							"originalOrder": 1
						}
					],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 2399,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 9451,
			"tierPoints": 180,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3096.2,
			"pricePerPerson": 1548.1,
			"depositPerPerson": 1548.1,
			"webDiscount": 0,
			"deposit": 3096.2,
			"hotel": {
				"id": "H2329",
				"name": "Aloft Harlem",
				"boardBasis": "Room Only",
				"content": {
					"name": "Aloft Harlem",
					"virginView": "In the Big Apple&#x2019;s Harlem, the Aloft Harlem is cool, fresh and modern. With the area known for its jazz clubs, soul food, trendy bars and lively clubs, you&#x2019;ll be spoilt for choice with things to do and new things to see. You&#x2019;re just a short stroll from Central Park, and subway stations are also just a few blocks away, so you can be in Midtown Manhattan in no time, seeing the tonnes of famed sites. And after a busy day in the city, your room is a welcome place to retreat to for some R&amp;R.",
					"telephoneBookableOnly": false,
					"vRating": "3",
					"hotelDescription": "In the Big Apple&#x2019;s Harlem, the Aloft Harlem is cool, fresh and modern. With the area known for its jazz clubs, soul food, trendy bars and lively clubs, you&#x2019;ll be spoilt for choice with things to do and new things to see.",
					"atAGlance": [
						"In NYC&apos;s Harlem district, a short walk to the top of Central Park and subway stations",
						"Cocktails and light bites in the bar",
						"Fitness centre",
						"Complimentary WiFi"
					],
					"location": {
						"lat": 40.809093,
						"lon": -73.95151
					},
					"parentLocation": "Harlem, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1248012/1248012-1-results_carousel.jpg?version=2"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1248012/1248012-2-results_carousel.jpg?version=2"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1248012/1248012-3-results_carousel.jpg?version=2"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1248012/1248012-4-results_carousel.jpg?version=2"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1248012/1248012-5-results_carousel.jpg?version=2"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1248012/1248012-6-results_carousel.jpg?version=2"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "aloft-harlem",
					"url": "/usa/new-york/harlem/aloft-harlem",
					"parentUrlName": "harlem",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [],
					"hotelFacilities": [
						"Restaurant",
						"Valet parking",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "3",
					"resortFees": false,
					"promoSticker": {
						"id": "new",
						"value": "New"
					},
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 832,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6192,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 7664.66,
			"pricePerPerson": 3832.33,
			"depositPerPerson": 3832.33,
			"webDiscount": 0,
			"deposit": 7664.66,
			"hotel": {
				"id": "BT5455",
				"name": "Four Seasons Hotel New York Downtown",
				"boardBasis": "Room Only",
				"content": {
					"name": "Four Seasons Hotel New York Downtown",
					"virginView": "A cut above the rest, this chic hotel jets up from Lower Manhattan, giving city views from its spacious suites and rooms. It&#x2019;s not just the architecture putting it on another level though, with high-living luxuries including a spa hosting Resident Healers and dining by celebrity chef Wolfgang Puck at CUT &#x2013; a stylish restaurant specialising in Wagyu steaks. Every inch oozes the timeless style you&#x2019;d expect from Four Seasons, but the dedicated health and wellness floor puts you on cloud nine, letting you swim among the skyscrapers that sit beyond the lap pool&#x2019;s floor-to-ceiling windows, all just a block from One World Trade Center and The Oculus.",
					"telephoneBookableOnly": false,
					"vRating": "5",
					"hotelDescription": "A cut above the rest, this chic hotel jets up from Lower Manhattan, giving city views from its spacious suites and rooms.",
					"atAGlance": [
						"Wellness floor with spa and pool",
						"Spacious rooms with downtown views",
						"CUT by celebrity chef Wolfgang Puck"
					],
					"location": {
						"lat": 40.712837,
						"lon": -74.00899
					},
					"parentLocation": "Financial District, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1148063/1148063-1-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1148063/1148063-2-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1148063/1148063-3-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1148063/1148063-4-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1148063/1148063-5-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1148063/1148063-6-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1148063/1148063-7-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1148063/1148063-8-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1148063/1148063-9-results_carousel.jpg?version=5"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Swimming Pool",
							"name": "swimming-pool"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "four-seasons-hotel-new-york-downtown",
					"url": "/usa/new-york/financial-district/four-seasons-hotel-new-york-downtown",
					"parentUrlName": "financial-district",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Spa",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access",
						"Swimming Pool"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 724,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 15329,
			"tierPoints": 300,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3073.67,
			"pricePerPerson": 1536.83,
			"depositPerPerson": 1536.84,
			"webDiscount": 0,
			"deposit": 3073.67,
			"hotel": {
				"id": "PGHY31931",
				"name": "Hyatt Centric Wall Street",
				"boardBasis": "Room Only",
				"content": {
					"name": "Hyatt Centric Wall Street",
					"virginView": "Promising that coveted &#x2018;loft living&#x2019; feel, ANdAZ Wall Street&#x2019;s roomy rooms (starting at 345 square foot each) come with high ceilings, oversized panelled windows, and cool modern styling. As you&#x2019;ll be tempted to &#x2018;stay in&#x2019;, they&#x2019;ve thrown in complimentary WiFi, and top up your minibar every day with free snacks and soft drinks. cBut you&#x2019;re in Wall Street&#x2019;s only hotel &#x2013; so making the most of your surroundings is a must, even if you only make it as far as the hotel&#x2019;s seasonal Beer Garden for a craft brew, its lobby for treats from NYC&#x2019;s famous Gillies Coffee, its complimentary nightly wine hour, or its bistro-style eatery for American dishes and handcrafted cocktails.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "Promising that coveted &#x2018;loft living&#x2019; feel, ANdAZ Wall Street&#x2019;s roomy rooms (starting at 345 square foot each) come with high ceilings, oversized panelled windows, and cool modern styling.",
					"atAGlance": [
						"Spacious loft-style rooms",
						"Free in-room soft drinks and snacks",
						"Complimentary WiFi",
						"Free Wine Hour and Gillies Coffee treats"
					],
					"location": {
						"lat": 40.70513,
						"lon": -74.008125
					},
					"parentLocation": "Financial District, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1019476/1019476-1-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1019476/1019476-2-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1019476/1019476-3-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1019476/1019476-4-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1019476/1019476-5-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1019476/1019476-6-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1019476/1019476-7-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1019476/1019476-8-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1019476/1019476-9-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1019476/1019476-10-results_carousel.jpg?version=16"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "hyatt-centric-wall-street",
					"url": "/usa/new-york/financial-district/hyatt-centric-wall-street",
					"parentUrlName": "financial-district",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 204,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6147,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3519.1,
			"pricePerPerson": 1759.55,
			"depositPerPerson": 1759.6,
			"webDiscount": 0,
			"deposit": 3519.1,
			"hotel": {
				"id": "BT7935",
				"name": "Mondrian Park Avenue",
				"boardBasis": "Room Only",
				"content": {
					"name": "Mondrian Park Avenue",
					"virginView": "Sleek, sophisticated and bold, it&#x2019;s easy to see why the Mondrian Park Avenue was named in Conde Nast&#x2019;s &#x2018;Best 25 hotels in New York City&#x2019; in 2019. Overlooking Park Avenue, you can sit and watch the world go by in the rooftop lounge (drink in hand, of course). Wake up to the sights and sounds of the Big Apple from the comfort of your room, and enjoy a morning yoga class, run twice a week. After the sun sets, you can enjoy some Mediterranean-inspired food in the restaurant, or make your way to the hidden lounge bar to enjoy some live music or a DJ set. And when you&#x2019;re ready to go out exploring, you&#x2019;re just a few block from some of NYC&#x2019;s top assets.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "Sleek, sophisticated and bold, it&#x2019;s easy to see why the Mondrian Park Avenue was named in Conde Nast&#x2019;s &#x2018;Best 25 hotels in New York City&#x2019; in 2019.",
					"atAGlance": [
						"A few blocks to the Empire State Building and Madison Square Park",
						"Named one of Conde Nast's 'Best 25 Hotels in New York City' in 2019",
						"Rooftop lounge with specialty cocktails",
						"Morning yoga twice a week"
					],
					"location": {
						"lat": 40.74476,
						"lon": -73.98325
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-1-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-2-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-3-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-4-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-5-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-6-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-7-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-8-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1241677/1241677-9-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241677/1241677-10-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241677/1241677-11-results_carousel.jpg?version=8"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Yoga",
							"name": "yoga"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "mondrian-park-avenue",
					"url": "/usa/new-york/midtown/mondrian-park-avenue",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Valet parking"
					],
					"familyKids": [],
					"activities": [
						"Yoga"
					],
					"features": [],
					"resortFees": false,
					"promoSticker": {
						"id": "new",
						"value": "New"
					},
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "style",
							"value": "The Stylish Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 812,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7038,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3097.41,
			"pricePerPerson": 1548.7,
			"depositPerPerson": 1548.71,
			"webDiscount": 0,
			"deposit": 3097.41,
			"hotel": {
				"id": "TC1437966",
				"name": "Holiday Inn New York City - Times Square",
				"boardBasis": "Non Refundable",
				"content": {
					"name": "Holiday Inn New York City Times Square",
					"virginView": "The bright lights of Broadway beckon at this midtown Manhattan hotel. Just two blocks from the theatre district, you&#x2019;ll be surrounded by top-billing shows, world-class dining and drinking venues, and those legendary sights and shops you came to New York to see. Fifth Avenue, Bryant Park, Times Square, Empire State Building: they&#x2019;re all within a few blocks&#x2019; stroll, with plenty of other NYC sights and sounds to experience as you make your way there. The Concierge at Holiday Inn New York City &#x2013; Times Square can tip you off to the best shows, but you also get complimentary WiFi, so you can find your own favourites. And, open until 4:00am, the hotel&#x2019;s all-day Rattle N Hum bar and kitchen welcomes you home with craft beers and late-night bites, before opening again at 6:00am to serve you breakfast.",
					"telephoneBookableOnly": false,
					"vRating": "3",
					"hotelDescription": "The bright lights of Broadway beckon at this midtown Manhattan hotel. Just two blocks from the theatre district, you&#x2019;ll be surrounded by top-billing shows, world-class dining and drinking venues, and those legendary sights and shops you came to New York to see. Fifth Avenue, Bryant Park, Times Square, Empire State Building: they&#x2019;re all within a few blocks&#x2019; stroll, with plenty of other NYC sights and sounds to experience as you make your way there. The Concierge at Holiday Inn New York City &#x2013; Times Square can tip you off to the best shows, but you also get complimentary WiFi, so you can find your own favourites. And, open until 4:00am, the hotel&#x2019;s all-day Rattle N Hum bar and kitchen welcomes you home with craft beers and late-night bites, before opening again at 6.00am to serve you breakfast.",
					"atAGlance": [
						"Just two blocks from the theatre district",
						"Complimentary fitness centre",
						"Complimentary WiFi"
					],
					"location": {
						"lat": 40.75523,
						"lon": -73.991714
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1016509/1016509-1-results_carousel.jpg?version=14"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1016509/1016509-2-results_carousel.jpg?version=14"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1016509/1016509-3-results_carousel.jpg?version=14"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1016509/1016509-4-results_carousel.jpg?version=14"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1016509/1016509-5-results_carousel.jpg?version=14"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1016509/1016509-6-results_carousel.jpg?version=14"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1016509/1016509-7-results_carousel.jpg?version=14"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "holiday-inn-new-york-city-times-square",
					"url": "/usa/new-york/midtown/holiday-inn-new-york-city-times-square",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1252,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6195,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 5858.66,
			"pricePerPerson": 2929.33,
			"depositPerPerson": 2929.33,
			"webDiscount": 0,
			"deposit": 5858.66,
			"hotel": {
				"id": "H1901",
				"name": "The Dominick",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Dominick",
					"virginView": "Big by SoHo standards, the 46 story hotel offers views, a very happening bar scene, a spa and great dining, so posing the dilemma, to stay in or to go out? Three words distinguish the 391 rooms and suites. Space. Glass. And Fendi. An average of 500 square feet guestrooms offer a lot of space and all the rooms have floor to ceiling windows. They are also the first rooms in Manhattan to have been furnished by Fendi, better known for their handbags. Bar d&#x2019;Eau, as the name suggests, is on the water. i.e. on the hotel&#x2019;s 6000 square foot rooftop pool deck, boasting inspiring views of the city's skyline. If that's not enough, there is also The Spa which has indoor and outdoor relaxation lounges, luxury treatments and Manhattan's first traditional Turkish Hammam.",
					"telephoneBookableOnly": false,
					"vRating": "5+",
					"hotelDescription": "Big by SoHo standards, the 46 story hotel offers views, a very happening bar scene, a spa and great dining, so posing the dilemma, to stay in or to go out? Three words distinguish the 391 rooms and suites. Space. Glass. And Fendi. An average of 500 square feet guestrooms offer a lot of space and all the rooms have floor to ceiling windows. They are also the first rooms in Manhattan to have been furnished by Fendi, better known for their handbags. Bar d&#x2019;Eau, as the name suggests, is on the water. i.e. on the hotel&#x2019;s 6000 square foot rooftop pool deck, boasting inspiring views of the city's skyline. If that's not enough, there is also The Spa which has indoor and outdoor relaxation lounges, luxury treatments and Manhattan's first traditional Turkish Hammam.",
					"atAGlance": [
						"Rooftop pool deck with city views",
						"Spa and fitness centre",
						"One and Two Bedroom Suite upgrades available, as well as Penthouse Suites",
						"Poolside bar and dining"
					],
					"location": {
						"lat": 40.7253,
						"lon": -74.00541
					},
					"parentLocation": "Soho and Tribeca, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-1-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-2-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-3-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-4-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-5-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-6-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-7-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-8-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-9-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-10-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/538288/538288-11-results_carousel.jpg?version=10"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "the-dominick",
					"url": "/usa/new-york/soho-and-tribeca/the-dominick",
					"parentUrlName": "soho-and-tribeca",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "style",
							"value": "The Stylish Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 4048,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 11717,
			"tierPoints": 220,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 4004.36,
			"pricePerPerson": 2002.18,
			"depositPerPerson": 2002.18,
			"webDiscount": 0,
			"deposit": 4004.36,
			"hotel": {
				"id": "H2940",
				"name": "InterContinental New York Times Square",
				"boardBasis": "Room Only",
				"content": {
					"name": "Intercontinental New York Times Square",
					"virginView": "The Intercontinental New York Times Square is superbly located with shops, restaurants and bars right on it&apos;s door and within walking distance to Times Square, Rockefeller Center, Restaurant Row and Broadway. Guestrooms are designed to evoke a chic Manhattan residence with spa-inspired bathrooms accented by midnight blue mosaic tiles. Complete with floor-to-ceiling windows rooms offer dramatic views over Manhattan skyline, Hudson River and Broadway, a relaxing place to relax in-between sightseeing.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "The Intercontinental New York Times Square is in a fantastic location with shops, restaurants and bars right on it&apos;s door and within walking distance to Times Square, Rockefeller Center, Restaurant Row and Broadway.",
					"atAGlance": [
						"Right on Times Square",
						"24-hour fitness centre",
						"Sculpture garden",
						"The Stinger Cocktail Bar and Kitchen"
					],
					"location": {
						"lat": 40.758663,
						"lon": -73.98982
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/615542/615542-1-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/615542/615542-2-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/615542/615542-3-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/615542/615542-4-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/615542/615542-5-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/615542/615542-6-results_carousel.jpg?version=10"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "intercontinental-new-york-times-square",
					"url": "/usa/new-york/midtown/intercontinental-new-york-times-square",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Fitness Centre/Gym",
						"Laundry Service"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 7312,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 8009,
			"tierPoints": 160,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 7904.12,
			"pricePerPerson": 3952.06,
			"depositPerPerson": 3952.06,
			"webDiscount": 0,
			"deposit": 7904.12,
			"hotel": {
				"id": "BT1944",
				"name": "Langham, New York, Fifth Avenue",
				"boardBasis": "Room Only",
				"content": {
					"name": "Langham New York, Fifth Avenue",
					"virginView": "This 5-star hotel lives up to its famous name and delivers on the luxury and elegance The Langham is known for. Situated in a prime location, you&#x2019;ll have stunning views of New York including seeing the Empire State Building and Fifth Excellent from your room&#x2019;s floor-to-ceiling windows. The excellent location also means you&#x2019;ll be near to all the famous attractions of New York City like Times Square, Central Park and the Theatre District where you can see a Broadway Show. In the city that never sleeps, you&#x2019;ll find you room a calm and comforting sanctuary away from the hustle and bustle.",
					"telephoneBookableOnly": false,
					"vRating": "5",
					"hotelDescription": "",
					"atAGlance": [
						"Near to the Empire State Building",
						"Short walk from Times Square",
						"Floor to ceiling views of the city",
						"Pet friendly"
					],
					"location": {
						"lat": 40.75018,
						"lon": -73.98354
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt1944/bt1944-1-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt1944/bt1944-2-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt1944/bt1944-3-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt1944/bt1944-4-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt1944/bt1944-5-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt1944/bt1944-6-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt1944/bt1944-7-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/bt1944/bt1944-8-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt1944/bt1944-9-results_carousel.jpg?version=4"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "langham-new-york-fifth-avenue",
					"url": "/usa/new-york/midtown/langham-new-york-fifth-avenue",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Valet parking",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 2841,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 15808,
			"tierPoints": 300,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 5835.06,
			"pricePerPerson": 2917.53,
			"depositPerPerson": 2917.53,
			"webDiscount": 0,
			"deposit": 5835.06,
			"hotel": {
				"id": "H0585",
				"name": "Gansevoort Meatpacking NYC",
				"boardBasis": "$25 Food and Beverage Credit",
				"content": {
					"name": "Gansevoort Meatpacking",
					"virginView": "Flaunting 360-degree views of the Big Apple, the Gansevoort Meatpacking NYC is smart, swanky, minimalist and full of sleek and fresh feels. Take the plunge into the rooftop heated pool whilst sipping a cocktail from the Lelie Rooftop bar. Go for the ultimate &#x2018;treat yourself&#x2019; moment, and have an in-room massage. Watch the sunset fall over the Hudson River. Borrow one of the free bikes and go on an adventure through the urban jungle. Visit the luxury stores that surround this iconic hotel. Whatever way you spend your time here, you&#x2019;re bound to feel spoilt rotten after.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "Flaunting 360-degree views of the Big Apple, the Gansevoort Meatpacking NYC is smart, swanky, minimalist and full of sleek and fresh feels. Whatever way you spend your time here, you&#x2019;re bound to feel spoilt rotten after.",
					"atAGlance": [
						"One of New York&#x2019;s hippest hotels",
						"Rooftop bar and heated pool",
						"Vibrant Meatpacking District location",
						"Short walk from High Line Park"
					],
					"location": {
						"lat": 40.739822,
						"lon": -74.00572
					},
					"parentLocation": "Chelsea, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-1-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-2-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-3-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-4-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-5-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-6-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-7-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-8-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-9-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-10-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-11-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/131217/131217-12-results_carousel.jpg?version=17"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Babysitting service",
							"name": "babysitting-service"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						},
						{
							"description": "Bicycle Rental",
							"name": "bicycle-rental"
						}
					],
					"urlName": "gansevoort-meatpacking",
					"url": "/usa/new-york/chelsea/gansevoort-meatpacking",
					"parentUrlName": "chelsea",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [
						"Babysitting service"
					],
					"activities": [
						"Bicycle Rental",
						"Swimming"
					],
					"features": [],
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "style",
							"value": "The Stylish Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 42,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 11670,
			"tierPoints": 220,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3950.85,
			"pricePerPerson": 1975.42,
			"depositPerPerson": 1975.43,
			"webDiscount": 0,
			"deposit": 3950.85,
			"hotel": {
				"id": "H1074",
				"name": "Hilton Garden Inn New York Chelsea",
				"boardBasis": "Room Only",
				"content": {
					"name": "Hilton Garden Inn New York Chelsea",
					"virginView": "This hotel is a very popular addition to the Hilton family, with state-of-the-art amenities, superb guest rooms and, a great location in the city's stylish fashion district of Chelsea, just south of Times Square and considered the new midtown. Central to all the sights and sounds of New York City's nightlife, award winning restaurants, galleries and museums it is also walking distance of the Empire State building, Macy's and 34th street for that all important shopping. Full American cooked breakfasts are served in the hotel restaurant or head into town to dine after a drink or two in the Lounge. There is also a fitness centre for those of you who wish to keep in shape!",
					"telephoneBookableOnly": false,
					"vRating": "3+",
					"hotelDescription": "In the city's stylish fashion district of Chelsea, this modern hotel is a stroll away from the High Line.",
					"atAGlance": [
						"Superb Chelsea location",
						"Close to a mix of nightlife restaurants and boutiques",
						"6 blocks away from Madison Square Gardens and Macys"
					],
					"location": {
						"lat": 40.74628,
						"lon": -73.9912
					},
					"parentLocation": "Chelsea, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8872/8872-1-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8872/8872-2-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8872/8872-3-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8872/8872-4-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8872/8872-5-results_carousel.jpg?version=12"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						}
					],
					"urlName": "hilton-garden-inn-new-york-chelsea",
					"url": "/usa/new-york/chelsea/hilton-garden-inn-new-york-chelsea",
					"parentUrlName": "chelsea",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 2505,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7902,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3042.96,
			"pricePerPerson": 1521.48,
			"depositPerPerson": 1521.48,
			"webDiscount": 0,
			"deposit": 3042.96,
			"hotel": {
				"id": "H1039",
				"name": "Sheraton New York Times Square Hotel",
				"boardBasis": "Room Only",
				"content": {
					"name": "Sheraton New York Times Square Hotel",
					"virginView": "Already a New York favourite, the Sheraton looks set to be more popular than ever! Having recently completed a multi-million dollar renovation programme, it&#x2019;s been completely transformed into one of the city&#x2019;s finest hotel residences! Okay, what&#x2019;s new exactly? Well, guest rooms are not just comfortable they&#x2019;re supremely so with contemporary furnishings and an elegant feel. Features include wall-mounted flatscreen TVs, chaise lounge chairs which convert into a bed, wireless Internet and that all-important Sheraton SweetSleeper bed! The fitness centre has also been revamped, and it&#x2019;s nothing less than state-of-the-arts.",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "Inside the Sheraton you've got fitness, food, massages and Manhattan's celebrated cocktails, and fuss free rooms with all the comforts you'll need.",
					"atAGlance": [
						"Located in Midtown between Central Park and Times Square",
						"Fully-equipped fitness centre",
						"Club Room upgrades"
					],
					"location": {
						"lat": 40.762585,
						"lon": -73.98199
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8890/8890-1-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/8890/8890-2-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/8890/8890-3-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/8890/8890-4-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8890/8890-5-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8890/8890-6-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/8890/8890-7-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/8890/8890-8-results_carousel.jpg?version=23"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8890/8890-9-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8890/8890-10-results_carousel.jpg?version=14"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						}
					],
					"urlName": "sheraton-new-york-times-square-hotel",
					"url": "/usa/new-york/midtown/sheraton-new-york-times-square-hotel",
					"parentUrlName": "midtown",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"video": {
						"url": "//www.youtube.com/qtPPoE84ct0"
					},
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 11492,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6086,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 2700.4,
			"pricePerPerson": 1350.2,
			"depositPerPerson": 1350.2,
			"webDiscount": 0,
			"deposit": 2700.4,
			"hotel": {
				"id": "H2087",
				"name": "Aloft New York Brooklyn",
				"boardBasis": "Room Only",
				"content": {
					"name": "Aloft New York Brooklyn",
					"virginView": "True to its name, Aloft Brooklyn offers loft-size bedrooms packed to the rafters with state-of-the-art amenities. Their signature bed is extremely comfortable and the city views will delight. The atmosphere is decidedly hip here, and amenities include a fitness centre (although pounding the streets of New York is just as good a work-out). No matter what time of the day hunger strikes, re:Fuel can oblige, serving snacks and drinks 24-hours a day. There's easy access into Manhattan, or if you fancy sticking by your base, explore all that Brooklyn has to offer &#x2014; from vintage flea markets and the ever-growing foodie scene to the relaxing Prospect Park and Brooklyn Botanic Garden.",
					"telephoneBookableOnly": false,
					"vRating": "3",
					"hotelDescription": "True to its name, Aloft Brooklyn offers loft-size bedrooms packed to the rafters with state-of-the-art amenities. Their signature bed is extremely comfortable and the city views will delight. The atmosphere is decidedly hip here, and amenities include a fitness centre (although pounding the streets of New York is just as good a work-out). No matter what time of the day hunger strikes, re:Fuel can oblige, serving snacks and drinks 24-hours a day. There's easy access into Manhattan, or if you fancy sticking by your base, explore all that Brooklyn has to offer &#x2014; from vintage flea markets and the ever-growing foodie scene to the relaxing Prospect Park and Brooklyn Botanic Garden.",
					"atAGlance": [
						"In the heart of Brooklyn, close to Brookyln Academy of Music and Prospect Park",
						"re:Fuel by Aloft with grab-and-go food",
						"Fitness centre",
						"Modern rooms"
					],
					"location": {
						"lat": 40.691578,
						"lon": -73.98441
					},
					"parentLocation": "Brooklyn, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/310266/310266-1-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/310266/310266-2-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/310266/310266-3-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/310266/310266-4-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/310266/310266-5-results_carousel.jpg?version=8"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "aloft-new-york-brooklyn",
					"url": "/usa/new-york/brooklyn/aloft-new-york-brooklyn",
					"parentUrlName": "brooklyn",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Bar",
						"Room Service",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "3",
					"resortFees": false,
					"promoSticker": {
						"id": "new",
						"value": "New"
					},
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1213,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 5401,
			"tierPoints": 100,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 5192.02,
			"pricePerPerson": 2596.01,
			"depositPerPerson": 2596.01,
			"webDiscount": 0,
			"deposit": 5192.02,
			"hotel": {
				"id": "BT369",
				"name": "The Pierre - A Taj Hotel",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Pierre - A Taj Hotel",
					"virginView": "A 5th Avenue landmark since 1930, The Pierre is a luxurious gem on the doorstep of Central Park. A masterclass in sophistication, past patrons have included the likes of Audrey Hepburn, Elizabeth Taylor and Coco Chanel. The divine d&#xe9;cor at every turn, superb service and comfortable, classy rooms make this a glorious retreat from the hustle and bustle of Manhattan. Still, the central location means that you won't have to venture far to immerse yourself in the city - both the nearest subway station, and the south-eastern entrance to the park, are only steps from the ultra-chic lobby.",
					"telephoneBookableOnly": false,
					"vRating": "5",
					"hotelDescription": "",
					"atAGlance": [
						"Award winning luxury hotel",
						"Central park views",
						"Elegant d&#xe9;cor",
						"Dog friendly"
					],
					"location": {
						"lat": 40.76513,
						"lon": -73.97189
					},
					"parentLocation": "Upper East Side, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-1-results_carousel.jpg?version=18"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-2-results_carousel.jpg?version=18"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-3-results_carousel.jpg?version=18"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-4-results_carousel.jpg?version=18"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-5-results_carousel.jpg?version=18"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-6-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-7-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-8-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-9-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-10-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-11-results_carousel.jpg?version=17"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt369/bt369-12-results_carousel.jpg?version=17"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Wheelchair access",
							"name": "wheelchair-access"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Wedding",
							"name": "wedding"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Anniversary and special occasions",
							"name": "anniversary-and-special-occasions"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "the-pierre---a-taj-hotel",
					"url": "/usa/new-york/upper-east-side/the-pierre---a-taj-hotel",
					"parentUrlName": "upper-east-side",
					"holidayType": [
						"City Break",
						"Wedding"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Family Room or Suite"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Room Service",
						"Valet parking",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [
						"Wheelchair access"
					],
					"resortFees": false,
					"salesMessages": [
						{
							"name": "NY 2022 The Pierre 4NF",
							"description": "",
							"salesMessageDescription": "",
							"displayAfter": "22-04-2022",
							"displayUntil": "31-03-2023",
							"type": "Special Offer",
							"typeUrlName": "special-offer",
							"originalOrder": 1
						}
					],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "luxe",
							"value": "The Luxe Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 2468,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 10384,
			"tierPoints": 200,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 4113.47,
			"pricePerPerson": 2056.73,
			"depositPerPerson": 2056.74,
			"webDiscount": 0,
			"deposit": 4113.47,
			"hotel": {
				"id": "PGNYLGAPLZ",
				"name": "The Fifty Sonesta Select New York",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Fifty Sonesta Select New York",
					"virginView": "Relax in the large Club Room and Den at this boutique hotel before experiencing the vibe of a superb location in Midtown Manhattan, a contemporary neighbourhood filled with rich traditions, two blocks from The Rockefeller Center, Times Square, The Theatre District, Fifth and Madison Avenues Shopping, popular eateries and Manhattan&#x2019;s most famous landmarks. They&#x2019;ve splashed $19 million on a refurb getting ready for your stay, with otherwise seductively sedate Studios and Suites featuring full kitchens. The arty vibe continues throughout the hotel, a collection of paintings, sculptures, photos and eclectic treasures by local New York artists. Continental breakfast is available for purchase, and can be enjoyed in The Club Room.&#xa0;",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "Experience the vibe of a superb location in Midtown Manhattan, a contemporary neighbourhood filled with rich traditions, two blocks from The Rockefeller Center, Times Square, The Theatre District, Fifth and Madison Avenues Shopping, popular eateries and Manhattan&#x2019;s most famous landmarks.",
					"atAGlance": [
						"Boutique hotel",
						"Located in Midtown East",
						"Steps away from restaurants and bars",
						"Suites with kitchenettes available"
					],
					"location": {
						"lat": 40.756107,
						"lon": -73.97096
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925768/925768-1-results_carousel.jpg?version=30"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925768/925768-2-results_carousel.jpg?version=30"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925768/925768-3-results_carousel.jpg?version=30"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925768/925768-4-results_carousel.jpg?version=30"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925768/925768-5-results_carousel.jpg?version=22"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925768/925768-6-results_carousel.jpg?version=22"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925768/925768-7-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925768/925768-8-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925768/925768-9-results_carousel.jpg?version=19"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "the-fifty-sonesta-select-new-york",
					"url": "/usa/new-york/midtown/the-fifty-sonesta-select-new-york",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Room Service",
						"Valet parking",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"resortFees": false,
					"salesMessages": [
						{
							"name": "NY 2022 Fifty Hotel &amp; Suites May Campaign",
							"description": "Booking Bonus: Receive $10 daily Cupboard Credit per room, space available room upgrade and early check-in when staying a minimum of 5 nights between 1 May-31 Dec &#x2019;22 booked between 30 Apr &#x2013;06 Jun &#x2018;22.Any applicable offers have been calculated into the prices shown. Offers may not be combinable.",
							"salesMessageDescription": "Booking Bonus: Receive $10 daily Cupboard Credit per room, space available room upgrade and early check-in when staying a minimum of 5 nights between 1 May-31 Dec &#x2019;22 booked between 30 Apr &#x2013;06 Jun &#x2018;22.Any applicable offers have been calculated into the prices shown. Offers may not be combinable.",
							"displayAfter": "30-04-2022",
							"displayUntil": "06-06-2022",
							"type": "Special Offer",
							"typeUrlName": "special-offer",
							"originalOrder": 1
						}
					],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "family",
							"value": "The Family Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 2381,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 8227,
			"tierPoints": 160,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 6852.84,
			"pricePerPerson": 3426.42,
			"depositPerPerson": 3426.42,
			"webDiscount": 0,
			"deposit": 6852.84,
			"hotel": {
				"id": "BT5714",
				"name": "1 Hotel Brooklyn Bridge",
				"boardBasis": "Room Only",
				"content": {
					"name": "1 Hotel Brooklyn Bridge",
					"virginView": "There&#x2019;s more than a &#x2018;nod to nature&#x2019; at 1 Hotel Brooklyn Bridge &#x2013; it&#x2019;s eco-friendly to its very core, from your room&#x2019;s organic bedding to the nature-inspired children&#x2019;s activities, daily Lobby Farmstand, use of reclaimed barn wood, and local artisanal products at the picnic-style restaurant. Style doesn&#x2019;t suffer for sustainability, with features like corrugated leather headboards, gritty blackened steel, crate-style slatted closets, and a pop-up beer garden all giving the hotel a cool and contemporary edge. And they haven&#x2019;t sacrificed those urban hotel essentials either, so you get complimentary WiFi, the Bamford Haybarn Spa, and a free shuttle into Manhattan (in a Tesla electric vehicle naturally) &#x2013; although you could just stroll over nearby Brooklyn Bridge instead. But it&#x2019;s the social buzz and views that make this place special, with the best enjoyed while sipping handcrafted cocktails on the rooftop pool terrace.",
					"telephoneBookableOnly": false,
					"vRating": "5",
					"hotelDescription": "There&#x2019;s more than a &#x2018;nod to nature&#x2019; at 1 Hotel Brooklyn Bridge &#x2013; it&#x2019;s eco-friendly to its very core, from your room&#x2019;s organic bedding to the nature-inspired children&#x2019;s activities, daily Lobby Farmstand, use of reclaimed barn wood, and local artisanal products at the picnic-style restaurant.",
					"atAGlance": [
						"Manhattan views from rooftop pool and bar",
						"Eco-friendly &#x2013; from d&#xe9;cor to dining",
						"Yoga classes",
						"Bamford Haybarn Spa"
					],
					"location": {
						"lat": 40.702225,
						"lon": -73.99553
					},
					"parentLocation": "Brooklyn, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1034597/1034597-1-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1034597/1034597-2-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1034597/1034597-3-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1034597/1034597-4-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1034597/1034597-5-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1034597/1034597-6-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1034597/1034597-7-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1034597/1034597-8-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1034597/1034597-9-results_carousel.jpg?version=1"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1034597/1034597-10-results_carousel.jpg?version=1"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1034597/1034597-11-results_carousel.jpg?version=1"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "1-hotel-brooklyn-bridge",
					"url": "/usa/new-york/brooklyn/1-hotel-brooklyn-bridge",
					"parentUrlName": "brooklyn",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Room Service",
						"Valet parking",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "5",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1334,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 13706,
			"tierPoints": 260,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 6677.62,
			"pricePerPerson": 3338.81,
			"depositPerPerson": 3338.81,
			"webDiscount": 0,
			"deposit": 6677.62,
			"hotel": {
				"id": "H2177",
				"name": "Andaz 5th Avenue",
				"boardBasis": "Room Only",
				"content": {
					"name": "Andaz 5th Avenue",
					"virginView": "Set in an historic 1916 building in the heart of Midtown Manhattan, the ANdAZ 5th Avenue prides itself on delivering the highest standard of service you&#x2019;ll find anywhere in New York. A few steps away you will find Bryant Park, New York Public Library, Empire State Building, Time Square and many other iconic New York attractions. In the fashionable Bryant Park area, everything is easily accessible on foot, including many excellent restaurants but when it comes to dining, look no further than The Shop. Fast becoming a favourite with locals, Executive Chef Daniel Mowles takes guests on a culinary journey that explores local foods in each bite. The Bar Downstairs is another popular resting place with communal tables. Whether connecting with the city through the curated art pieces or speaking with our artist in residence working on a mural, guests will leave this mid-town Manhattan hotel feeling more like a local.",
					"telephoneBookableOnly": false,
					"vRating": "4+",
					"hotelDescription": "Set in an historic 1916 building, in the heart of Midtown Manhattan, the ANdAZ 5th Avenue prides itself on delivering the highest standard of service you&#x2019;ll find anywhere in New York. Even at check-in, guests are offered complimentary coffee and wine before being shown to their room, all of which feel luxuriously oversized with 12-foot ceilings, massive windows and spacious marble bathrooms outfitted with double vanities, a porcelain foot bath, and an oversized rain shower.",
					"atAGlance": [
						"Perfectly located in Mid-town Manhattan",
						"Loft-style guest rooms",
						"A culinary journey through New York City"
					],
					"location": {
						"lat": 40.75283,
						"lon": -73.981125
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/374868/374868-1-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/374868/374868-2-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/374868/374868-3-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/374868/374868-4-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/374868/374868-5-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/374868/374868-6-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/374868/374868-7-results_carousel.jpg?version=12"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/374868/374868-8-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/374868/374868-9-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/374868/374868-10-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/374868/374868-11-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/374868/374868-12-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/374868/374868-13-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/374868/374868-14-results_carousel.jpg?version=3"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "andaz-5th-avenue",
					"url": "/usa/new-york/midtown/andaz-5th-avenue",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 3147,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 13355,
			"tierPoints": 260,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 11692.39,
			"pricePerPerson": 5846.19,
			"depositPerPerson": 5846.2,
			"webDiscount": 0,
			"deposit": 11692.39,
			"hotel": {
				"id": "1142",
				"name": "The Plaza Hotel",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Plaza Midtown Central Park",
					"virginView": "Feel like you&#x2019;ve been here before? You have, in the movies anyway. From Home Alone 2 and Bride Wars, to Sleepless in Seattle, the location has proved a blockbuster backdrop for some firm film favourites. The Plaza certainly lives up to its name, and being a National Historic Landmark it&#x2019;s full of old-world elegance and grandeur. Just south of Central Park, there&#x2019;s plenty of places to eat and drink right on your doorstep, but some of the hotel&#x2019;s own restaurants are not to be missed. And not forgetting the aptly named Champange Bar, where you can sip on some bubbles whilst looking out on Fifth Avenue and The Pulitzer Fountain.",
					"telephoneBookableOnly": false,
					"vRating": "5+",
					"hotelDescription": "Feel like you&#x2019;ve been here before? You have, in the movies anyway. The Plaza certainly lives up to its name, and being a National Historic Landmark it&#x2019;s full of old-world elegance and grandeur.",
					"atAGlance": [
						"One of America&#x2019;s most celebrated hotels",
						"Caudalie Vinoth&#xe9;apie Spa*",
						"Shops at the Plaza",
						"Speciality suite upgrades"
					],
					"location": {
						"lat": 40.763874,
						"lon": -73.97267
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810986/810986-1-results_carousel.jpg?version=29"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810986/810986-2-results_carousel.jpg?version=29"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810986/810986-3-results_carousel.jpg?version=29"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810986/810986-4-results_carousel.jpg?version=29"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810986/810986-5-results_carousel.jpg?version=29"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810986/810986-6-results_carousel.jpg?version=29"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810986/810986-7-results_carousel.jpg?version=21"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/810986/810986-8-results_carousel.jpg?version=21"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-9-results_carousel.jpg?version=21"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-10-results_carousel.jpg?version=21"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-11-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-12-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-13-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-14-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-15-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-16-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-17-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-18-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-19-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-20-results_carousel.jpg?version=19"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810986/810986-21-results_carousel.jpg?version=19"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "the-plaza-midtown-central-park",
					"url": "/usa/new-york/midtown/the-plaza-midtown-central-park",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "luxe",
							"value": "The Luxe Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 3288,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 23385,
			"tierPoints": 400,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3851.83,
			"pricePerPerson": 1925.91,
			"depositPerPerson": 1925.92,
			"webDiscount": 0,
			"deposit": 3851.83,
			"hotel": {
				"id": "H2356",
				"name": "W New York Times Square",
				"boardBasis": "Room Only",
				"content": {
					"name": "W New York Times Square",
					"virginView": "You may be in the heart of NYC but you&#x2019;ll enjoy peace and quiet in a W hotel room. Head to The Living Room, complete with DJs and an extensive drinks list! The hotel&#x2019;s Blue Fin Restaurant is also highly recommended, and comes complete with a sushi bar. If that&apos;s not enough, there&apos;s Dos Caminos serving Mexican fare, and a margarita bar! Directly facing the bright lights of Broadway, a dramatic, floating, stainless steel staircase leads the way to a semi-private alcove dining area where guests can kick-back and listen to the music of Miles Davis, John Coltrane and Dizzy Gillespie. A wonderful place to stay for couples, friends and family, you&#x2019;ll also enjoy the W&#x2019;s famous Whatever/Whenever service &#x2013; nothing is too much trouble for the staff, all you have to do is ask!",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "You may be in the heart of NYC but you&#x2019;ll enjoy peace and quiet in a W hotel room. Head to The Living Room, complete with DJs and an extensive drinks list! The hotel&#x2019;s Blue Fin Restaurant is also highly recommended, and comes complete with a sushi bar. If that&apos;s not enough, there&apos;s Dos Caminos serving Mexican fare, and a margarita bar! Directly facing the bright lights of Broadway, a dramatic, floating, stainless steel staircase leads the way to a semi-private alcove dining area where guests can kick-back and listen to the music of Miles Davis, John Coltrane and Dizzy Gillespie. A wonderful place to stay for couples, friends and family, you&#x2019;ll also enjoy the W&#x2019;s famous Whatever/Whenever service &#x2013; nothing is too much trouble for the staff, all you have to do is ask!",
					"atAGlance": [
						"In the heart of NYC",
						"Seafood restaurant with sushi bar",
						"FIT fitness centre",
						"One Bedroom Suite upgrades",
						"Mexican restaurant and margarita bar"
					],
					"location": {
						"lat": 40.759308,
						"lon": -73.985565
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-1-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-2-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-3-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-4-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-5-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-6-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/813515/813515-7-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-8-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-9-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/813515/813515-10-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-11-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-12-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-13-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/813515/813515-14-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-15-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-16-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-17-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/813515/813515-18-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-19-results_carousel.jpg?version=3"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/813515/813515-20-results_carousel.jpg?version=3"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Babysitting service",
							"name": "babysitting-service"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "w-new-york-times-square",
					"url": "/usa/new-york/midtown/w-new-york-times-square",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [
						"Babysitting service"
					],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 4944,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7704,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3133.66,
			"pricePerPerson": 1566.83,
			"depositPerPerson": 1566.83,
			"webDiscount": 0,
			"deposit": 3133.66,
			"hotel": {
				"id": "PGNYLGASMH",
				"name": "The Shelburne Sonesta New York",
				"boardBasis": "Room Only",
				"content": {
					"name": "The Shelburne Sonesta New York",
					"virginView": "Immerse yourself in the urban lifestyle at The Shelburne Sonesta&#xa0; New York, an ideal base for your next trip to Manhattan. Subtly inspired by Walt Whitman's great love affair with New York City, this hotel offers a collection of spacious guest rooms and apartment-style suites. Located on Lexington Avenue in the heart of Murray Hill, the convenient location treats guests to an authentic taste of city life. Explore the neighbourhood, with its variety of trendy gastro pubs, bars and brunch spots, or enjoy the city's most exciting sights and experiences, such as the Empire State Building and Grand Central Station - all within easy reach.&#xa0;",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "If you crave the Manhattan nights you&#x2019;ve seen in the sit-coms, Shelburne NYC&#x2019;s got it covered.",
					"atAGlance": [
						"In the cool Midtown Murray Hill neighbourhood",
						"Complimentary hosted evening wine hour",
						"Easy access to amenities and attractions"
					],
					"location": {
						"lat": 40.74834,
						"lon": -73.97784
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925770/925770-1-results_carousel.jpg?version=37"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/925770/925770-2-results_carousel.jpg?version=37"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925770/925770-3-results_carousel.jpg?version=33"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925770/925770-4-results_carousel.jpg?version=27"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925770/925770-5-results_carousel.jpg?version=27"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925770/925770-6-results_carousel.jpg?version=27"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925770/925770-7-results_carousel.jpg?version=26"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/925770/925770-8-results_carousel.jpg?version=13"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "the-shelburne-sonesta-new-york",
					"url": "/usa/new-york/midtown/the-shelburne-sonesta-new-york",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [],
					"hotelFacilities": [
						"Room Service",
						"Valet parking",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [
						{
							"name": "NY 2022 Shelburne Hotel &amp; Suites May Campaign",
							"description": "Booking Bonus: Receive $10 daily Cupboard Credit per room and early room check-in when staying a minimum of 5 nights between 1 May-31 Dec &#x2019;22 booked between 30 Apr &#x2013; 06 Jun&#x2018;22.",
							"salesMessageDescription": "Booking Bonus: Receive $10 daily Cupboard Credit per room and early room check-in when staying a minimum of 5 nights between 1 May-31 Dec &#x2019;22 booked between 30 Apr &#x2013; 06 Jun&#x2018;22.",
							"displayAfter": "30-04-2022",
							"displayUntil": "06-06-2022",
							"type": "Special Offer",
							"typeUrlName": "special-offer",
							"originalOrder": 1
						}
					],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 5662,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6267,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 8493.02,
			"pricePerPerson": 4246.51,
			"depositPerPerson": 4246.51,
			"webDiscount": 0,
			"deposit": 8493.02,
			"hotel": {
				"id": "HB97568",
				"name": "St. Regis New York",
				"boardBasis": "Room Only",
				"content": {
					"name": "St. Regis New York",
					"virginView": "Elegance and sophistication through and through, the 5-star St Regis New York oozes pure grace from every angle featuring exquisite newly renovated and redesigned guestrooms and the King Cole Bar &amp; Salon that has recently undergone expansion unveiling a bold new era of glamour. With a founding vision of creating &#x201c;the finest hotel in the world&#x201d;, the St Regis offers a complimentary butler service for all guests- so sit back and enjoy! There has certainly been no holding back on the d&#xe9;cor, with luxurious fabrics and marble tiled flooring coupled with an extensive art collection this treasured hotel is sure to impress. Positioned within walking distance of Central Park, Fifth Avenue shopping, world-class restaurants and award-winning theatres you will never be short of things to do and when you a ready for some down time, relax with a spot of Afternoon Tea, unwind at the brand new St Regis Athletic Club, or enjoy the melodious tones of the harpist while sipping on the legendary &#x201c;Red Snapper&#x201d;, the St Regis&#x2019; perfected Bloody Mary cocktail.",
					"telephoneBookableOnly": false,
					"vRating": "5+",
					"hotelDescription": "Elegance and sophistication through and through, the 5-star St Regis New York oozes pure grace from every angle. With a founding vision of creating &#x201c;the finest hotel in the world&#x201d;, the St Regis offers a complimentary butler service for all guests- so sit back and enjoy! There has certainly been no holding back on the d&#xe9;cor, with luxurious fabrics and marble tiled flooring coupled with an extensive art collection this treasured hotel is sure to impress.",
					"atAGlance": [
						"Complimentary butler service",
						"Within walking distance of Central Park and Fifth Avenue shopping",
						"Newly renovated and redesigned rooms",
						"King Cole Bar &amp; Salon"
					],
					"location": {
						"lat": 40.761402,
						"lon": -73.97461
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-1-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-2-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-3-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-4-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-5-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-6-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-7-results_carousel.jpg?version=16"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-8-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-9-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-10-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-11-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-12-results_carousel.jpg?version=8"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-13-results_carousel.jpg?version=8"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Spa",
							"name": "spa"
						},
						{
							"description": "Honeymoon",
							"name": "honeymoon"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "st-regis-new-york",
					"url": "/usa/new-york/midtown/st-regis-new-york",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break",
						"Honeymoon"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Spa",
						"Room Service",
						"Valet parking",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"resortFees": false,
					"promoSticker": {
						"id": "webexclusive",
						"value": "Online Exclusive"
					},
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": [
						{
							"key": "luxe",
							"value": "The Luxe Edit"
						}
					]
				},
				"tripAdvisor": {
					"numReviews": 1153,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 16986,
			"tierPoints": 320,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3648.26,
			"pricePerPerson": 1824.13,
			"depositPerPerson": 1824.13,
			"webDiscount": 0,
			"deposit": 3648.26,
			"hotel": {
				"id": "BT10265",
				"name": "Moxy NYC Chelsea",
				"boardBasis": "Room Only",
				"content": {
					"name": "Moxy NYC Chelsea",
					"virginView": "<p>Whether you're a Manhattan master or an NYC newcomer, everyone is welcome at the MOXY. This chic Chelsea hotel offers iconic skyline views, modern amenities, and a whole lot of excitement. You're in easy reach of the city's most famed sights, but you'll find that the hotel is an attraction in itself, with an array of art installations, in-house flower shop, and even renowned rooftop bar The Fleur Room all under one roof. Fresh pastries from Cafe Feroce will brighten your mornings, and guests can effortlessly move from busy days to relaxing evenings at the bar, where flexible workspaces morphe into a playful lounge. Upgrade to a room with a view, and you'll always feel right in the thick of things - the pictures speak for themselves!<br></p>",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "",
					"atAGlance": [
						"In-house cafe, ristorante and lounge",
						"Glass-encased rooftop bar",
						"Flower boutique",
						"Dog friendly"
					],
					"location": {
						"lat": 40.74646,
						"lon": -73.99097
					},
					"parentLocation": "Chelsea, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-1-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-2-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-3-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-4-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-5-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-6-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-7-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-8-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-9-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-10-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-11-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-12-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-13-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-14-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-15-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-16-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-17-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-18-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-19-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/bt10265/bt10265-20-results_carousel.jpg?version=5"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						}
					],
					"urlName": "moxy-nyc-chelsea",
					"url": "/usa/new-york/chelsea/moxy-nyc-chelsea",
					"parentUrlName": "chelsea",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [],
					"accommodationType": [],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Fitness Centre/Gym",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 760,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7297,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3667.92,
			"pricePerPerson": 1833.96,
			"depositPerPerson": 1833.96,
			"webDiscount": 0,
			"deposit": 3667.92,
			"hotel": {
				"id": "H3019",
				"name": "Courtyard by Marriott Central Park",
				"boardBasis": "Room Only",
				"content": {
					"name": "Courtyard by Marriott Central Park",
					"virginView": "New York&#x2019;s newest hotel, the Courtyard combines Marriott&#x2019;s reputation for quality with the allure of a hip and happening location. Rooms are spacious and well equipped but better still, many boast views of the Hudson River &#x2013; unbeatable! New Yorkers take their fitness seriously, hence the gym is available 24-hours of the day. Regarding eats, you&#x2019;re mere steps away from world-class dining, including some great breakfast bars to get the day started. Iconic attractions are also within walking distance, rise and shine early and take them all in. And even if you want to trip the light fantastic come nightfall, you&#x2019;ll be glad of such a wonderful place to return to for a rest in-between!",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "New York&#x2019;s newest hotel, the Courtyard combines Marriott&#x2019;s reputation for quality with the allure of a hip and happening location. Rooms are spacious and well equipped but better still, many boast views of the Hudson River &#x2013; unbeatable!",
					"atAGlance": [
						"New York&#x2019;s newest hotel",
						"24-hour fitness centre",
						"Complimentary WiFi"
					],
					"location": {
						"lat": 40.76425,
						"lon": -73.982605
					},
					"parentLocation": "Midtown, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/710293/710293-1-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710293/710293-2-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710293/710293-3-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/710293/710293-4-results_carousel.jpg?version=9"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710293/710293-5-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/710293/710293-6-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/710293/710293-7-results_carousel.jpg?version=4"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/710293/710293-8-results_carousel.jpg?version=4"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "courtyard-by-marriott-central-park",
					"url": "/usa/new-york/midtown/courtyard-by-marriott-central-park",
					"parentUrlName": "midtown",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Room Service",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1703,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7336,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3170.25,
			"pricePerPerson": 1585.12,
			"depositPerPerson": 1585.13,
			"webDiscount": 0,
			"deposit": 3170.25,
			"hotel": {
				"id": "H1509",
				"name": "New York Marriott at the Brooklyn Bridge",
				"boardBasis": "Room Only",
				"content": {
					"name": "New York Marriott at the Brooklyn Bridge",
					"virginView": "The New York Marriott at the Brooklyn Bridge offers modern accommodation in up-and-coming Brooklyn - enjoy a refreshing combination of modern sophistication and simplicity with more facilities than many Manhattan hotels. Just steps from the East River, there is a subway station nearby with easy, quick connections into the city. The Great Room Bar &amp; Lounge and Brooklyn Pantry are available to you for a range of dining options, or sample Brooklyn's foodie scene by heading out. All of the refurbished rooms are contemporary in style, and some even feature spectacular views of the city skyline and the famed Brooklyn Bridge.",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "The New York Marriott at the Brooklyn Bridge offers modern accommodation in up-and-coming Brooklyn - enjoy a refreshing combination of modern sophistication and simplicity with more facilities than many Manhattan hotels. Just steps from the East River, there is a subway station nearby with easy, quick connections into the city. The Great Room Bar &amp; Lounge and Brooklyn Pantry are available to you for a range of dining options, or sample Brooklyn's foodie scene by heading out. All of the refurbished rooms are contemporary in style, and some even feature spectacular views of the city skyline and the famed Brooklyn Bridge.",
					"atAGlance": [
						"Located in Brooklyn, just across the Brooklyn Bridge",
						"Contemporary, modern rooms",
						"Close to Brooklyn Museum and Brooklyn Academy of music",
						"Brooklyn Pantry",
						"Indoor pool"
					],
					"location": {
						"lat": 40.692642,
						"lon": -73.98864
					},
					"parentLocation": "Brooklyn, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-1-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-2-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-3-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-4-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-5-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-6-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-7-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-8-results_carousel.jpg?version=5"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8893/8893-9-results_carousel.jpg?version=5"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Swimming Pool",
							"name": "swimming-pool"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Laundry Service",
							"name": "laundry-service"
						}
					],
					"urlName": "new-york-marriott-at-the-brooklyn-bridge",
					"url": "/usa/new-york/brooklyn/new-york-marriott-at-the-brooklyn-bridge",
					"parentUrlName": "brooklyn",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Fitness Centre/Gym",
						"Laundry Service",
						"Internet Access",
						"Swimming Pool"
					],
					"familyKids": [],
					"activities": [
						"Swimming"
					],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 887,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 6340,
			"tierPoints": 120,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 3924.9,
			"pricePerPerson": 1962.45,
			"depositPerPerson": 1962.5,
			"webDiscount": 0,
			"deposit": 3924.9,
			"hotel": {
				"id": "TC1233617",
				"name": "Sheraton Brooklyn New York ",
				"boardBasis": "Room Only",
				"content": {
					"name": "Sheraton Brooklyn New York ",
					"virginView": "When it comes to &#x2018;you-time&#x2019;, Sheraton Brooklyn New York covers every kind of pleasure: there&#x2019;s the fitness centre for the health-conscious; the pool and Jacuzzi for the swimmers; the Starbucks&#xae; caf&#xe9; for the caffeine-hungry; and the rooftop garden for those in need of fresh air &#x2013; and the odd cocktail. Sitting among the skyscrapers of Brooklyn, the Asian-infused Kimoto Rooftop &amp; Bar gives a nod to the East in its carefully created bar food, curated craft beers, and concocted cocktails. Throw in views over the buzzing district and towards the Statue of Liberty, and you&#x2019;ll see why it&#x2019;s one of the hotel&#x2019;s most popular meeting spots. In fact, it&#x2019;s the perfect place to head after a day exploring your neighbourhood, which packs in dining, shopping, and entertainment &#x2013; much of it just a stroll away at City Point Brooklyn.",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "Sheraton Brooklyn has all your needs covered onsite and off. Perfectly located close to entertainment, sports venues, trendy shopping and dining.",
					"atAGlance": [
						"In buzzing Brooklyn, near City Point Brooklyn",
						"Heated indoor pool and whirlpool",
						"Dining from Italian to Starbucks&#xae; caf&#xe9; treats"
					],
					"location": {
						"lat": 40.69142,
						"lon": -73.984535
					},
					"parentLocation": "Brooklyn, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/986853/986853-1-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986853/986853-2-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986853/986853-3-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/986853/986853-4-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986853/986853-5-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/986853/986853-6-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986853/986853-7-results_carousel.jpg?version=10"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/986853/986853-8-results_carousel.jpg?version=10"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Internet Access",
							"name": "internet-access"
						},
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Swimming Pool",
							"name": "swimming-pool"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Room Service",
							"name": "room-service"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						},
						{
							"description": "Close to City Centre",
							"name": "close-to-city-centre"
						},
						{
							"description": "Valet parking",
							"name": "valet-parking"
						}
					],
					"urlName": "sheraton-brooklyn-new-york",
					"url": "/usa/new-york/brooklyn/sheraton-brooklyn-new-york",
					"parentUrlName": "brooklyn",
					"holidayType": [
						"City Break"
					],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [
						"Close to City Centre"
					],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Room Service",
						"Valet parking",
						"Safety Deposit Box",
						"Fitness Centre/Gym",
						"Internet Access",
						"Swimming Pool"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 1475,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 7850,
			"tierPoints": 140,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		},
		{
			"totalPrice": 5760.67,
			"pricePerPerson": 2880.33,
			"depositPerPerson": 2880.34,
			"webDiscount": 0,
			"deposit": 5760.67,
			"hotel": {
				"id": "H1049",
				"name": "Soho Grand Hotel",
				"boardBasis": "Room Only",
				"content": {
					"name": "Soho Grand Hotel",
					"virginView": "New York City&#x2019;s celebrated boutique hotel is located in Manhattan&#x2019;s most iconic neighbourhood which gives visitors an authentic downtown experience and access to the world famous art galleries, boutiques, bars and restaurants. The Grand Bar &amp; Lounge, with its welcoming sofas, is known as 'SoHo's living room'.",
					"telephoneBookableOnly": false,
					"vRating": "4",
					"hotelDescription": "New York City&#x2019;s celebrated boutique hotel is located in Manhattan&#x2019;s most iconic neighbourhood which gives visitors an authentic downtown experience.",
					"atAGlance": [
						"Boutique hotel",
						"In Soho, on West Broadway between Grand Street and Canal Street",
						"Views of Downtown Manhattan from every room",
						"Walking distance of Little Italy and Chinatown"
					],
					"location": {
						"lat": 40.721733,
						"lon": -74.00454
					},
					"parentLocation": "Soho and Tribeca, New York",
					"images": [
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-1-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-2-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-3-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-4-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-5-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-6-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-7-results_carousel.jpg?version=11"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-8-results_carousel.jpg?version=7"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-9-results_carousel.jpg?version=6"
							}
						},
						{
							"RESULTS_CAROUSEL": {
								"url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8885/8885-10-results_carousel.jpg?version=6"
							}
						}
					],
					"keyFeatures": [
						{
							"description": "Restaurant",
							"name": "restaurant"
						},
						{
							"description": "Bar",
							"name": "bar"
						},
						{
							"description": "Fitness Centre/Gym",
							"name": "fitness-centre-gym"
						},
						{
							"description": "Safety Deposit Box",
							"name": "safety-deposit-box"
						}
					],
					"urlName": "soho-grand-hotel",
					"url": "/usa/new-york/soho-and-tribeca/soho-grand-hotel",
					"parentUrlName": "soho-and-tribeca",
					"holidayType": [],
					"boardBasis": [
						"Room Only"
					],
					"hotelLocation": [],
					"accommodationType": [
						"Room"
					],
					"hotelFacilities": [
						"Restaurant",
						"Bar",
						"Safety Deposit Box",
						"Fitness Centre/Gym"
					],
					"familyKids": [],
					"activities": [],
					"features": [],
					"starRating": "4",
					"resortFees": false,
					"salesMessages": [],
					"propertyType": "Hotel",
					"hotelEdits": []
				},
				"tripAdvisor": {
					"numReviews": 68,
					"ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
				}
			},
			"outboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "London Heathrow",
				"departureAirportCode": "LHR",
				"arrivalAirport": "New York J F Kennedy International Apt",
				"arrivalAirportCode": "JFK",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "3",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-01T09:20:00",
						"to": "2022-06-01T12:15:00",
						"departureAirport": "London Heathrow",
						"departureAirportCode": "LHR",
						"arrivalAirport": "New York J F Kennedy International Apt",
						"arrivalAirportCode": "JFK"
					}
				]
			},
			"inboundFlight": {
				"airline": "VS",
				"airlineName": "Virgin Atlantic",
				"cabinClass": "economy classic",
				"departureAirport": "New York J F Kennedy International Apt",
				"departureAirportCode": "JFK",
				"arrivalAirport": "London Heathrow",
				"arrivalAirportCode": "LHR",
				"sectors": [
					{
						"airline": "VS",
						"airlineName": "Virgin Atlantic",
						"cabinClass": "economy classic",
						"flightNumber": "4",
						"stops": 0,
						"operatingAirline": "VS",
						"operatingAirlineName": "Virgin Atlantic",
						"from": "2022-06-08T18:00:00",
						"to": "2022-06-09T06:20:00",
						"departureAirport": "New York J F Kennedy International Apt",
						"departureAirportCode": "JFK",
						"arrivalAirport": "London Heathrow",
						"arrivalAirportCode": "LHR"
					}
				]
			},
			"locationWidened": false,
			"virginPoints": 11521,
			"tierPoints": 220,
			"departureDate": "2022-06-01",
			"selectedDate": "2022-06-01"
		}
	]
}))

export default response;