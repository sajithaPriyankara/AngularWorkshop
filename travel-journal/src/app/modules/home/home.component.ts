import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public articles: Article[];

  constructor() {
  }

  ngOnInit() {
    this.articles = [
      {
        author: 'Jone Doe',
        type: 'Nature',
        tags: ['Nature', 'Beaches', 'Ancient cities', 'Wild life'],
        title: 'Trip to Sri Lanka',
        content: 'Despite its small size Sri Lanka boasts of one of the highest ' +
          'rates of biological endemism in the world whether in plants or animals and ' +
          'is included among the top five biodiversity hotspots in the world. Of ' +
          'the ninety-one species of mammals found in Sri Lanka Asian elephants, sloth bear, ' +
          'leopards, sambar and wild buffaloes engages the majority of the attention of wildlife enthusiast. ' +
          'Yet the rarest mammals of Sri Lanka are the red slender Loris, Toque Macaque, and Purple-faced Langur,' +
          ' who according to IUCN clarifications are endangered due to habitat loss. \\r\\n\\r\\nMeanwhile ' +
          'the ocean around Sri Lanka is home to large families of cetaceans including the mighty blue whales,' +
          ' sperm whales and lively dolphins. Altogether 26 species of cetaceans rule the waters surrounding the' +
          ' country, making it one of the best locations for whale and dolphin watching.  \\r\\n\\r\\nDespite the mighty' +
          ' elephants and rare amphibians found in the country birds are the glory of the Sri Lanka’s wildlife.' +
          ' Boasting nearly 433 bird species of which 233 are resident Sri Lanka holds 20 endemic species while ' +
          'another 80 species have developed distinct Sri Lankan races, compared to their cousins in Indian mainland.' +
          '\\r\\n\\r\\nAlthough less celebrated, Sri Lanka has one of the richest diversity of amphibians in the world,' +
          ' containing over 106 species of amphibians of over 90 of which are endemic. The country has long claimed to have ' +
          'the highest amphibian species density in the world with a high concentration in the Sinharaja rainforest.',
        image: 'http://www.traveller.com.au/content/dam/images/h/1/7/9/t/2/image.related.articleLeadwide.620x349.h1783b.png/1541138566539.jpg',
        comments: []
      }, {
        author: 'Sajitha Priyankara',
        type: 'Asia',
        tags: ['Cruise Tour', 'Mumbai', 'Taj Mahal'],
        title: 'Trip to India',
        content: 'Our Costa cruise trip to India will introduce you to cities like Goa and Mumbai, Cochin and Kerala, ' +
          'all characterised by bustling throngs, rich colours and the humanity of the people, which towers ' +
          'over the beauty of the area. An India of coloured and golden temples that gleam in the sun, ' +
          'an India of gaudy silks and soft pashminas, an India which is a never-ending smile, heart-felt and open. ' +
          'An India of frenzy and traffic, fog and light, Ganges waters, castes and resurrections, sweet music and' +
          ' delicious cuisine. An India that always looks sublime even when it touches the abyss: you can only understand ' +
          'it by experiencing it and only thus can you love it forever. In the end, you no longer know ' +
          'which way is up or down, light and shadow, heaven and earth and then you discover that you should not look' +
          ' for contrasts but just surrender to the ' +
          'beauty of these places, different but complementary, aboard one of our cruise ships',
        image: 'https://www.costacruises.co.uk/content/dam/costa/inventory-assets/countries/IND/IND.jpg.image.1440.523.high.jpg',
        comments: []
      }, {
        author: 'Manikya Senarathne',
        type: 'Hiking',
        tags: ['Hiking', 'Camping', 'Nature'],
        title: 'Hike Manigala',
        content: 'Manigala is located in the Knuckles Mountain Range.' +
          ' Most travellers who climb it up to see the beauty ' +
          'of Knuckles range also find the luck to see the beautiful Thelgamu-Oya.',
        image: '',
        comments: []
      },
      {
        author: 'Sajitha Priyankara',
        type: 'Family trips',
        tags: ['Petronas', 'Sunway Lagoon'],
        title: 'Trip to Malaysia',
        content: 'Malaysia is a Southeast Asian country occupying parts' +
          ' of the Malay Peninsula and the island of Borneo. It\'s known for its beaches, ' +
          'rainforests and mix of Malay, Chinese, Indian and European cultural influences. ' +
          'The capital, Kuala Lumpur, is home to colonial buildings,',
        image: '',
        comments: []
      }
    ];
  }

}
