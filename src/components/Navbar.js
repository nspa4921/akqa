import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
  const [menus, setMenus] = useState([]);
  const [products, setProducts] = useState([]);
  const [picture, setPicture] = useState('');

  let bedingungen = [ 
    { name: 'Adtralza', subItem: [
      { name: 'Overview',
      picture: 'https://lh3.googleusercontent.com/qqBd1ZH5xjYIJ5XUttS5tvhEj7p2Fbj6k9krK_Jv2ZeouFZW0swA5kVznu-4Gy_s-inUJFw589OiYUaYRy_2ouO-j7hVC0TeMDvMTwZp3_Vld2iXq3ubyiG6XuKKHuoUe7-vI_SSar__QBtN3WdIVKFVqfXlBQcEsUyCqTvbSjiE_6zDqdMyQgbP7ZJwMK4lbVb5UYuqIpRaAEOpU6EUcsmZK3AqkqlikAdlTC169Em-d-1VGmEv8dBIn7z1_5qi-0rifhjFgd4Gy9Hq8ienNR5T7L0bWP5havh5JW40sTJ4mO95-yJPpSjNIumVGRxgE6SdAPjsFr2z1qRdjTNRJCXq0cVCjsjnQcCngota_u1_QHeRO51don_hcIJBdAOXBb9jV8V7lTeytFWYz_IeKpKMuGRFFVAc-qBMu0lU18pMvevGrQBMwHe4VSoQFXJBFUDUSjM8iO_Q7RdmwWqK-Z-0eA1_oF-HQBufehP6KZccZrq3Gzjc4xZ1XeAkxMZmZygTL1pt3mbdIxCuVOFqu07VGQR8cr5qID1yav9R_HnqaWi71Q7OUqN-yfwpBKOAtFan9-x3A6vjQP-3fHNKzjcTAgzQ-zkFEHCBoW07rc36jEALNNv8BtegSe8rX1ee_SXn1IsR60KV94bzUclyti_cl1OFVA3efWnkgJRCQGkALyjcjoehZ2mOi0u-a-xmOPFl2mYTywp9o6-jUckuvZbQ=w1442-h405-no?authuser=0' 
     },
      { name: 'Mode of Action' ,
      picture: 'https://lh3.googleusercontent.com/qqBd1ZH5xjYIJ5XUttS5tvhEj7p2Fbj6k9krK_Jv2ZeouFZW0swA5kVznu-4Gy_s-inUJFw589OiYUaYRy_2ouO-j7hVC0TeMDvMTwZp3_Vld2iXq3ubyiG6XuKKHuoUe7-vI_SSar__QBtN3WdIVKFVqfXlBQcEsUyCqTvbSjiE_6zDqdMyQgbP7ZJwMK4lbVb5UYuqIpRaAEOpU6EUcsmZK3AqkqlikAdlTC169Em-d-1VGmEv8dBIn7z1_5qi-0rifhjFgd4Gy9Hq8ienNR5T7L0bWP5havh5JW40sTJ4mO95-yJPpSjNIumVGRxgE6SdAPjsFr2z1qRdjTNRJCXq0cVCjsjnQcCngota_u1_QHeRO51don_hcIJBdAOXBb9jV8V7lTeytFWYz_IeKpKMuGRFFVAc-qBMu0lU18pMvevGrQBMwHe4VSoQFXJBFUDUSjM8iO_Q7RdmwWqK-Z-0eA1_oF-HQBufehP6KZccZrq3Gzjc4xZ1XeAkxMZmZygTL1pt3mbdIxCuVOFqu07VGQR8cr5qID1yav9R_HnqaWi71Q7OUqN-yfwpBKOAtFan9-x3A6vjQP-3fHNKzjcTAgzQ-zkFEHCBoW07rc36jEALNNv8BtegSe8rX1ee_SXn1IsR60KV94bzUclyti_cl1OFVA3efWnkgJRCQGkALyjcjoehZ2mOi0u-a-xmOPFl2mYTywp9o6-jUckuvZbQ=w1442-h405-no?authuser=0' 
    },
    { name: 'Efficacy' ,
    picture: 'https://lh3.googleusercontent.com/qqBd1ZH5xjYIJ5XUttS5tvhEj7p2Fbj6k9krK_Jv2ZeouFZW0swA5kVznu-4Gy_s-inUJFw589OiYUaYRy_2ouO-j7hVC0TeMDvMTwZp3_Vld2iXq3ubyiG6XuKKHuoUe7-vI_SSar__QBtN3WdIVKFVqfXlBQcEsUyCqTvbSjiE_6zDqdMyQgbP7ZJwMK4lbVb5UYuqIpRaAEOpU6EUcsmZK3AqkqlikAdlTC169Em-d-1VGmEv8dBIn7z1_5qi-0rifhjFgd4Gy9Hq8ienNR5T7L0bWP5havh5JW40sTJ4mO95-yJPpSjNIumVGRxgE6SdAPjsFr2z1qRdjTNRJCXq0cVCjsjnQcCngota_u1_QHeRO51don_hcIJBdAOXBb9jV8V7lTeytFWYz_IeKpKMuGRFFVAc-qBMu0lU18pMvevGrQBMwHe4VSoQFXJBFUDUSjM8iO_Q7RdmwWqK-Z-0eA1_oF-HQBufehP6KZccZrq3Gzjc4xZ1XeAkxMZmZygTL1pt3mbdIxCuVOFqu07VGQR8cr5qID1yav9R_HnqaWi71Q7OUqN-yfwpBKOAtFan9-x3A6vjQP-3fHNKzjcTAgzQ-zkFEHCBoW07rc36jEALNNv8BtegSe8rX1ee_SXn1IsR60KV94bzUclyti_cl1OFVA3efWnkgJRCQGkALyjcjoehZ2mOi0u-a-xmOPFl2mYTywp9o6-jUckuvZbQ=w1442-h405-no?authuser=0' 
  },
  { name: 'Quality of Life' ,
    picture: '' 
    },
    { name: 'Safety' ,
    picture: '' 
    },
    { name: 'Dosing' ,
    picture: '' 
    },
    { name: 'News' ,
    picture: '' 
    },
    { name: 'Technical Information' ,
    picture: '' 
    }
    ]}, 
    { name: 'Diavonex', subItem: [] }, 
    { name: 'Diavobet', subItem: [] },
    { name: 'Enstilar', subItem: [] },
    { name: 'Fucidin', subItem: [] },
    { name: 'Kyntheum', subItem: [] },
    { name: 'Protopic', subItem: [] },
    { name: 'Skinoren', subItem: [] },
    { name: 'Tralokinumab', subItem: [] },
    { name: 'Xamiol', subItem: [] }];
    
  let behandlungen = [ 
    { name: 'Adtralza', subItem: [
      { name: 'Overview',
      picture: 'https://lh3.googleusercontent.com/qqBd1ZH5xjYIJ5XUttS5tvhEj7p2Fbj6k9krK_Jv2ZeouFZW0swA5kVznu-4Gy_s-inUJFw589OiYUaYRy_2ouO-j7hVC0TeMDvMTwZp3_Vld2iXq3ubyiG6XuKKHuoUe7-vI_SSar__QBtN3WdIVKFVqfXlBQcEsUyCqTvbSjiE_6zDqdMyQgbP7ZJwMK4lbVb5UYuqIpRaAEOpU6EUcsmZK3AqkqlikAdlTC169Em-d-1VGmEv8dBIn7z1_5qi-0rifhjFgd4Gy9Hq8ienNR5T7L0bWP5havh5JW40sTJ4mO95-yJPpSjNIumVGRxgE6SdAPjsFr2z1qRdjTNRJCXq0cVCjsjnQcCngota_u1_QHeRO51don_hcIJBdAOXBb9jV8V7lTeytFWYz_IeKpKMuGRFFVAc-qBMu0lU18pMvevGrQBMwHe4VSoQFXJBFUDUSjM8iO_Q7RdmwWqK-Z-0eA1_oF-HQBufehP6KZccZrq3Gzjc4xZ1XeAkxMZmZygTL1pt3mbdIxCuVOFqu07VGQR8cr5qID1yav9R_HnqaWi71Q7OUqN-yfwpBKOAtFan9-x3A6vjQP-3fHNKzjcTAgzQ-zkFEHCBoW07rc36jEALNNv8BtegSe8rX1ee_SXn1IsR60KV94bzUclyti_cl1OFVA3efWnkgJRCQGkALyjcjoehZ2mOi0u-a-xmOPFl2mYTywp9o6-jUckuvZbQ=w1442-h405-no?authuser=0' 
     },
      { name: 'Mode of Action' ,
      picture: 'https://lh3.googleusercontent.com/qqBd1ZH5xjYIJ5XUttS5tvhEj7p2Fbj6k9krK_Jv2ZeouFZW0swA5kVznu-4Gy_s-inUJFw589OiYUaYRy_2ouO-j7hVC0TeMDvMTwZp3_Vld2iXq3ubyiG6XuKKHuoUe7-vI_SSar__QBtN3WdIVKFVqfXlBQcEsUyCqTvbSjiE_6zDqdMyQgbP7ZJwMK4lbVb5UYuqIpRaAEOpU6EUcsmZK3AqkqlikAdlTC169Em-d-1VGmEv8dBIn7z1_5qi-0rifhjFgd4Gy9Hq8ienNR5T7L0bWP5havh5JW40sTJ4mO95-yJPpSjNIumVGRxgE6SdAPjsFr2z1qRdjTNRJCXq0cVCjsjnQcCngota_u1_QHeRO51don_hcIJBdAOXBb9jV8V7lTeytFWYz_IeKpKMuGRFFVAc-qBMu0lU18pMvevGrQBMwHe4VSoQFXJBFUDUSjM8iO_Q7RdmwWqK-Z-0eA1_oF-HQBufehP6KZccZrq3Gzjc4xZ1XeAkxMZmZygTL1pt3mbdIxCuVOFqu07VGQR8cr5qID1yav9R_HnqaWi71Q7OUqN-yfwpBKOAtFan9-x3A6vjQP-3fHNKzjcTAgzQ-zkFEHCBoW07rc36jEALNNv8BtegSe8rX1ee_SXn1IsR60KV94bzUclyti_cl1OFVA3efWnkgJRCQGkALyjcjoehZ2mOi0u-a-xmOPFl2mYTywp9o6-jUckuvZbQ=w1442-h405-no?authuser=0' 
    },
    { name: 'Efficacy' ,
    picture: 'https://lh3.googleusercontent.com/qqBd1ZH5xjYIJ5XUttS5tvhEj7p2Fbj6k9krK_Jv2ZeouFZW0swA5kVznu-4Gy_s-inUJFw589OiYUaYRy_2ouO-j7hVC0TeMDvMTwZp3_Vld2iXq3ubyiG6XuKKHuoUe7-vI_SSar__QBtN3WdIVKFVqfXlBQcEsUyCqTvbSjiE_6zDqdMyQgbP7ZJwMK4lbVb5UYuqIpRaAEOpU6EUcsmZK3AqkqlikAdlTC169Em-d-1VGmEv8dBIn7z1_5qi-0rifhjFgd4Gy9Hq8ienNR5T7L0bWP5havh5JW40sTJ4mO95-yJPpSjNIumVGRxgE6SdAPjsFr2z1qRdjTNRJCXq0cVCjsjnQcCngota_u1_QHeRO51don_hcIJBdAOXBb9jV8V7lTeytFWYz_IeKpKMuGRFFVAc-qBMu0lU18pMvevGrQBMwHe4VSoQFXJBFUDUSjM8iO_Q7RdmwWqK-Z-0eA1_oF-HQBufehP6KZccZrq3Gzjc4xZ1XeAkxMZmZygTL1pt3mbdIxCuVOFqu07VGQR8cr5qID1yav9R_HnqaWi71Q7OUqN-yfwpBKOAtFan9-x3A6vjQP-3fHNKzjcTAgzQ-zkFEHCBoW07rc36jEALNNv8BtegSe8rX1ee_SXn1IsR60KV94bzUclyti_cl1OFVA3efWnkgJRCQGkALyjcjoehZ2mOi0u-a-xmOPFl2mYTywp9o6-jUckuvZbQ=w1442-h405-no?authuser=0' 
  },
  { name: 'Quality of Life' ,
    picture: '' 
    },
    { name: 'Safety' ,
    picture: '' 
    },
    { name: 'Dosing' ,
    picture: '' 
    },
    { name: 'News' ,
    picture: '' 
    },
    { name: 'Technical Information' ,
    picture: '' 
    }
    ] }, 
    { name: 'Diavonex', subItem: [] }, 
    { name: 'Diavobet', subItem: [] },
    { name: 'Enstilar', subItem: [] },
    { name: 'Fucidin', subItem: [] },
    { name: 'Kyntheum', subItem: [] },
    { name: 'Protopic', subItem: [] },
    { name: 'Skinoren', subItem: [] },
    { name: 'Tralokinumab', subItem: [] },
    { name: 'Xamiol', subItem: [] },
];

    
  return (
    <div className='globalmenu'>
      <Navbar expand="lg">
        <Container style={{paddingLeft: '127px'}}>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link className="hover-underline-animation main-menu-btn" href="#home" onClick={() => {setMenus(bedingungen); setProducts([]); setPicture()} }>Bedingungen</Nav.Link>
              <Nav.Link className="hover-underline-animation main-menu-btn" href="#link" onClick={() => {setMenus(behandlungen); setProducts([]); setPicture()} }>Behandlungen</Nav.Link>
              <Nav.Link className="hover-underline-animation main-menu-btn" href="#link" onClick={() => {setMenus(behandlungen); } }>Veranstaltungen</Nav.Link>
              <Nav.Link className="hover-underline-animation main-menu-btn" href="#link" onClick={() => {setMenus(behandlungen); } }>Werkzeuge</Nav.Link>             
              <Nav.Link className="hover-underline-animation main-menu-btn" href="#link" onClick={() => {setMenus(behandlungen); } }>Forschung und Erkenntnisse</Nav.Link>             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
      <Navbar expand="lg" >
        <Container style={{paddingLeft: '127px'}}> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {menus.map(team=> (
                <Nav.Link className="hover-underline-animation main-menu-btn" onClick={() => {setProducts(team.subItem); setPicture()} }>{team.name}</Nav.Link>

              )) }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar>
        <Container style={{paddingLeft: '127px'}}>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {products.map(item=> (
                <Nav.Link className="hover-underline-animation submenu2" onClick={() => setPicture(item.picture) }>{item.name}</Nav.Link>

              )) }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img src={picture} width="1443px" alt=""/>

    </div>
  );
}

export default NavBar;