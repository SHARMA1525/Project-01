/* ============================================================
   QUINCE — CATEGORY PAGE JAVASCRIPT
   Handles: URL param reading, dynamic rendering, filter,
   sort, wishlist, sub-category navigation, load more.
   ============================================================ */

'use strict';

/* ----------------------------------------------------------
   1. CATEGORY CONFIGURATION
   ---------------------------------------------------------- */
var CATEGORY_CONFIG = {
  sweaters: {
    title: "WOMEN'S SWEATERS",
    breadcrumb: ['Women', 'Sweaters'],
    subcats: [
      { name: 'All',                img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Cardigans',          img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Cashmere Sweaters',  img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Cotton Sweaters',    img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Pullovers',          img: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Merino Wool Sweaters', img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Oversized Sweaters', img: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Sleeveless',         img: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Alpaca Sweaters',    img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Turtlenecks',        img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&auto=format&fit=crop&q=75&crop=top' }
    ]
  },
  tops: {
    title: "WOMEN'S TOPS",
    breadcrumb: ['Women', 'Tops'],
    subcats: [
      { name: 'All',          img: 'https://images.unsplash.com/photo-1485968579580-b6d065642315?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'T-Shirts',     img: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Tank Tops',    img: 'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Blouses',      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Long Sleeve',  img: 'https://images.unsplash.com/photo-1525507119428-b5db9ca90a5e?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Crop Tops',    img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Button-Downs', img: 'https://images.unsplash.com/photo-1487222477894-d3f4d71e2b01?w=200&auto=format&fit=crop&q=75&crop=top' }
    ]
  },
  dresses: {
    title: "WOMEN'S DRESSES",
    breadcrumb: ['Women', 'Dresses'],
    subcats: [
      { name: 'All',          img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Midi Dresses', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Maxi Dresses', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Mini Dresses', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Wrap Dresses', img: 'https://images.unsplash.com/photo-1485968579580-b6d065642315?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Slip Dresses', img: 'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Knit Dresses', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&auto=format&fit=crop&q=75&crop=top' }
    ]
  },
  bedding: {
    title: 'HOME & BEDDING',
    breadcrumb: ['Home', 'Bedding'],
    subcats: [
      { name: 'All',          img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&auto=format&fit=crop&q=75' },
      { name: 'Sheet Sets',   img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=200&auto=format&fit=crop&q=75' },
      { name: 'Duvet Covers', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&auto=format&fit=crop&q=75' },
      { name: 'Pillowcases',  img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&auto=format&fit=crop&q=75' },
      { name: 'Quilts',       img: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=200&auto=format&fit=crop&q=75' },
      { name: 'Throws',       img: 'assets/images/cozy.jpeg' },
      { name: 'Bed Skirts',   img: 'assets/images/bed.avif' }
    ]
  },
  cashmere: {
    title: "WOMEN'S CASHMERE",
    breadcrumb: ['Women', 'Cashmere'],
    subcats: [
      { name: 'All',                  img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Cashmere Sweaters',    img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Cashmere Cardigans',   img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Cashmere Tees',        img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Cashmere Accessories', img: 'assets/images/cashmere.avif' },
      { name: 'Cashmere Sets',        img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=200&auto=format&fit=crop&q=75&crop=top' }
    ]
  },
  bags: {
    title: "WOMEN'S BAGS",
    breadcrumb: ['Women', 'Bags'],
    subcats: [
      { name: 'All',           img: 'assets/images/bags.avif' },
      { name: 'Tote Bags',     img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&auto=format&fit=crop&q=75' },
      { name: 'Shoulder Bags', img: 'https://images.unsplash.com/photo-1590739293931-a38e89c4e6df?w=200&auto=format&fit=crop&q=75' },
      { name: 'Crossbody',     img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&auto=format&fit=crop&q=75' },
      { name: 'Clutches',      img: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=200&auto=format&fit=crop&q=75' },
      { name: 'Backpacks',     img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&auto=format&fit=crop&q=75' },
      { name: 'Belt Bags',     img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=200&auto=format&fit=crop&q=75' }
    ]
  },
  pants: {
    title: "WOMEN'S PANTS",
    breadcrumb: ['Women', 'Pants'],
    subcats: [
      { name: 'All',          img: 'assets/images/pants.avif' },
      { name: 'Trousers',     img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Wide Leg',     img: 'https://images.unsplash.com/photo-1525507119428-b5db9ca90a5e?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Straight Leg', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Joggers',      img: 'https://images.unsplash.com/photo-1487222477894-d3f4d71e2b01?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Shorts',       img: 'https://images.unsplash.com/photo-1475259003090-0f5d1fa64869?w=200&auto=format&fit=crop&q=75&crop=top' }
    ]
  },
  furniture: {
    title: 'FURNITURE & HOME',
    breadcrumb: ['Home', 'Furniture'],
    subcats: [
      { name: 'All',      img: 'assets/images/furniture.avif' },
      { name: 'Sofas',    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&auto=format&fit=crop&q=75' },
      { name: 'Chairs',   img: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=200&auto=format&fit=crop&q=75' },
      { name: 'Tables',   img: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=200&auto=format&fit=crop&q=75' },
      { name: 'Rugs',     img: 'assets/images/rugs.webp' },
      { name: 'Storage',  img: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=200&auto=format&fit=crop&q=75' },
      { name: 'Lighting', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&auto=format&fit=crop&q=75' }
    ]
  },
  jewelry: {
    title: 'JEWELRY',
    breadcrumb: ['Women', 'Jewelry'],
    subcats: [
      { name: 'All',       img: 'assets/images/jewelry.avif' },
      { name: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&auto=format&fit=crop&q=75' },
      { name: 'Earrings',  img: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=200&auto=format&fit=crop&q=75' },
      { name: 'Bracelets', img: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=200&auto=format&fit=crop&q=75' },
      { name: 'Rings',     img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&auto=format&fit=crop&q=75' },
      { name: 'Sets',      img: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&auto=format&fit=crop&q=75' }
    ]
  },
  outerwear: {
    title: "WOMEN'S OUTERWEAR",
    breadcrumb: ['Women', 'Outerwear'],
    subcats: [
      { name: 'All',            img: 'assets/images/outerware.avif' },
      { name: 'Trench Coats',   img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Puffer Jackets', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Blazers',        img: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Wool Coats',     img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Raincoats',      img: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=200&auto=format&fit=crop&q=75&crop=top' }
    ]
  },
  shoes: {
    title: 'SHOES & FOOTWEAR',
    breadcrumb: ['Women', 'Shoes'],
    subcats: [
      { name: 'All',      img: 'assets/images/footwear.avif' },
      { name: 'Sneakers', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=75' },
      { name: 'Boots',    img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=200&auto=format&fit=crop&q=75' },
      { name: 'Loafers',  img: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=200&auto=format&fit=crop&q=75' },
      { name: 'Sandals',  img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200&auto=format&fit=crop&q=75' },
      { name: 'Heels',    img: 'https://images.unsplash.com/photo-1499971856191-1a420a42b498?w=200&auto=format&fit=crop&q=75' },
      { name: 'Flats',    img: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=200&auto=format&fit=crop&q=75' }
    ]
  },
  rugs: {
    title: 'RUGS & FLOOR COVERINGS',
    breadcrumb: ['Home', 'Rugs'],
    subcats: [
      { name: 'All',          img: 'assets/images/rugs.webp' },
      { name: 'Area Rugs',    img: 'assets/images/rugs.webp' },
      { name: 'Runner Rugs',  img: 'assets/images/rugs.webp' },
      { name: 'Round Rugs',   img: 'assets/images/rugs.webp' },
      { name: 'Outdoor Rugs', img: 'assets/images/rugs.webp' }
    ]
  },
  skirts: {
    title: "WOMEN'S SKIRTS",
    breadcrumb: ['Women', 'Skirts'],
    subcats: [
      { name: 'All',          img: 'assets/images/skirts.avif' },
      { name: 'Mini Skirts',  img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Midi Skirts',  img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Maxi Skirts',  img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Wrap Skirts',  img: 'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Pleated',      img: 'https://images.unsplash.com/photo-1485968579580-b6d065642315?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Denim Skirts', img: 'https://images.unsplash.com/photo-1475259003090-0f5d1fa64869?w=200&auto=format&fit=crop&q=75&crop=top' }
    ]
  },
  men: {
    title: "MEN'S CLOTHING",
    breadcrumb: ['Men', "Men's"],
    subcats: [
      { name: 'All',         img: 'assets/images/men.avif' },
      { name: 'Sweaters',    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'T-Shirts',    img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Pants',       img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Outerwear',   img: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=200&auto=format&fit=crop&q=75&crop=top' },
      { name: 'Accessories', img: 'assets/images/cashmere.avif' }
    ]
  }
};

/* ----------------------------------------------------------
   2. PRODUCT DATA  (20-24 items per major category)
   ---------------------------------------------------------- */
var PRODUCTS = {
  sweaters: [
    { id:'sw1',  name:'Lightweight Cotton Cashmere Link-Stitch Dolman Sweater', price:'$44.90',   rating:4.9, colors:['#8a2020','#e8c8b8','#c4a870','#1a1a1a','#e8dfd0'], badge:'New',         type:'Pullovers',  material:'Cotton Cashmere', style:'Casual',  img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cotton Sweaters' },
    { id:'sw2',  name:'Lightweight Cotton Cashmere Crew Sweater',               price:'$34.90',   rating:4.9, colors:['#8a2020','#1a2840','#888','#1a1a1a','#4a6040','#98a890'], badge:'New',  type:'Pullovers',  material:'Cotton Cashmere', style:'Casual',  img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cotton Sweaters' },
    { id:'sw3',  name:'Cotton Cashmere Fitted Ribbed Cardigan',                 price:'$55.00',   rating:4.9, colors:['#8a2020','#1a1a1a','#f5f0e8','#c4a870','#e8dfd0'], badge:'New',        type:'Cardigans',  material:'Cotton Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cardigans' },
    { id:'sw4',  name:'Mongolian Cashmere Crewneck Sweater',                    price:'$50.00',   rating:4.9, colors:['#888','#f5f0e8','#1a2840','#1a1a1a','#c4a870'], badge:'Best seller',   type:'Pullovers',  material:'Cashmere',        style:'Classic', img:'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'sw5',  name:'100% Organic Cotton Boyfriend Crew Sweater',             price:'$45.00',   rating:4.8, colors:['#6a1a30','#f5f0e8','#1a2840'], badge:'New',                            type:'Pullovers',  material:'Cotton',          style:'Casual',  img:'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cotton Sweaters' },
    { id:'sw6',  name:'Lightweight Cotton Cashmere Relaxed Sweater Tee',        price:'$29.90',   rating:5.0, colors:['#4a6040','#1a1a1a','#888'], badge:'Back in stock',                     type:'Pullovers',  material:'Cotton Cashmere', style:'Casual',  img:'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cotton Sweaters' },
    { id:'sw7',  name:'100% Vicuna Crewneck Sweater',                           price:'$1,000.00',rating:5.0, colors:['#c4a870','#c09060'], badge:'Back in stock',                            type:'Pullovers',  material:'Cashmere',        style:'Luxury',  img:'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'sw8',  name:'100% Yak Wool Diamond Stitch Crew Sweater',              price:'$69.90',   rating:4.9, colors:['#6a4030','#888','#1a1a1a'], badge:'New',                               type:'Pullovers',  material:'Yak Wool',        style:'Classic', img:'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Pullovers' },
    { id:'sw9',  name:'Mongolian Cashmere Cardigan',                            price:'$79.90',   rating:4.8, colors:['#c4a870','#1a1a1a','#1a2840','#6a1a30'], badge:null,                   type:'Cardigans',  material:'Cashmere',        style:'Classic', img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cardigans' },
    { id:'sw10', name:'Cashmere Fisherman Crew Sweater',                        price:'$89.90',   rating:4.9, colors:['#f5f0e8','#888','#1a2840'], badge:'Best seller',                       type:'Pullovers',  material:'Cashmere',        style:'Classic', img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'sw11', name:'Merino Wool Turtleneck Sweater',                         price:'$64.90',   rating:4.7, colors:['#1a1a1a','#3a3a3a','#1a2840','#d4c8b8'], badge:null,                  type:'Turtlenecks',material:'Merino Wool',      style:'Classic', img:'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Turtlenecks' },
    { id:'sw12', name:'Cotton Cashmere Oversized Pullover',                     price:'$59.90',   rating:4.8, colors:['#98a890','#d4c8b8','#888','#1a1a1a'], badge:'New',                    type:'Pullovers',  material:'Cotton Cashmere', style:'Casual',  img:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Oversized Sweaters' },
    { id:'sw13', name:'Alpaca Wool Crewneck Sweater',                           price:'$74.90',   rating:4.6, colors:['#c4a870','#8a4a30','#f5f0e8'], badge:null,                             type:'Pullovers',  material:'Alpaca',          style:'Casual',  img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Alpaca Sweaters' },
    { id:'sw14', name:'Mongolian Cashmere V-Neck Sweater',                      price:'$59.90',   rating:4.9, colors:['#1a1a1a','#1a2840','#888','#c4a870','#f5f0e8'], badge:null,           type:'Pullovers',  material:'Cashmere',        style:'Classic', img:'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'sw15', name:'European Linen Blend Summer Sweater',                    price:'$39.90',   rating:4.7, colors:['#f5f0e8','#98a890','#d4c8b8'], badge:null,                             type:'Pullovers',  material:'Linen',           style:'Casual',  img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cotton Sweaters' },
    { id:'sw16', name:'Organic Cotton Striped Henley Sweater',                  price:'$49.90',   rating:4.8, colors:['#1a2840','#f5f0e8','#888'], badge:'New',                               type:'Pullovers',  material:'Cotton',          style:'Casual',  img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cotton Sweaters' },
    { id:'sw17', name:'Cashmere Sleeveless Shell Sweater',                      price:'$44.90',   rating:4.8, colors:['#1a1a1a','#f5f0e8','#1a2840','#c4a870'], badge:null,                  type:'Sleeveless', material:'Cashmere',        style:'Classic', img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Sleeveless' },
    { id:'sw18', name:'Merino Wool Oversized Ribbed Pullover',                  price:'$54.90',   rating:4.7, colors:['#d4c8b8','#98a890','#8a4a30','#6a4030'], badge:'New',                 type:'Pullovers',  material:'Merino Wool',     style:'Casual',  img:'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Oversized Sweaters' },
    { id:'sw19', name:'Cotton Cashmere Cable Crew Cardigan',                    price:'$69.90',   rating:4.8, colors:['#f5f0e8','#c4a870','#888'], badge:null,                                type:'Cardigans',  material:'Cotton Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1485968579580-b6d065642315?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cardigans' },
    { id:'sw20', name:'Alpaca Wool Turtleneck',                                 price:'$84.90',   rating:4.9, colors:['#c4a870','#3a3a3a','#2a5030'], badge:'Best seller',                   type:'Turtlenecks',material:'Alpaca',          style:'Classic', img:'https://images.unsplash.com/photo-1475259003090-0f5d1fa64869?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Alpaca Sweaters' },
    { id:'sw21', name:'Mongolian Cashmere Cropped Cardigan',                    price:'$89.90',   rating:4.9, colors:['#6a1a30','#1a1a1a','#c4a870','#8a2020'], badge:'Best seller',         type:'Cardigans',  material:'Cashmere',        style:'Classic', img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cardigans' },
    { id:'sw22', name:'Cotton Cashmere Ribbed V-Neck Midi Dress Sweater',       price:'$79.90',   rating:4.7, colors:['#8a4a30','#1a2840','#1a1a1a'], badge:'New',                           type:'Pullovers',  material:'Cotton Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cotton Sweaters' },
    { id:'sw23', name:'Yak Crewneck Sweater Vest',                              price:'$89.90',   rating:4.8, colors:['#1a1a1a','#f5f0e8','#d4c8b8'], badge:'New',                           type:'Sleeveless', material:'Yak Wool',        style:'Classic', img:'https://images.unsplash.com/photo-1525507119428-b5db9ca90a5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Sleeveless' },
    { id:'sw24', name:'Merino Wool Fine-Knit Cardigan',                         price:'$59.90',   rating:4.6, colors:['#888','#1a2840','#e8b8b0'], badge:null,                                type:'Cardigans',  material:'Merino Wool',     style:'Casual',  img:'https://images.unsplash.com/photo-1487222477894-d3f4d71e2b01?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cardigans' }
  ],
  tops: [
    { id:'tp1',  name:'100% Organic Cotton Classic Fit Tee',         price:'$20.00',  rating:4.8, colors:['#1a1a1a','#f5f0e8','#888','#1a2840'], badge:'New',        type:'T-Shirts',     material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1485968579580-b6d065642315?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'T-Shirts' },
    { id:'tp2',  name:'Mongolian Cashmere Short-Sleeve Tee',          price:'$49.90',  rating:4.9, colors:['#3a3a3a','#888','#1a2840','#f5f0e8'], badge:'Best seller', type:'T-Shirts',     material:'Cashmere',   style:'Classic', img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'T-Shirts' },
    { id:'tp3',  name:'European Linen Relaxed Blouse',                price:'$39.90',  rating:4.7, colors:['#f5f0e8','#98a890','#e8b8b0'], badge:'New',               type:'Blouses',      material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Blouses' },
    { id:'tp4',  name:'Silk-Blend Long Sleeve V-Neck Top',            price:'$55.00',  rating:4.8, colors:['#1a1a1a','#f5f0e8','#e8b8b0','#1a2840'], badge:null,      type:'Long Sleeve',  material:'Silk',       style:'Classic', img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Long Sleeve' },
    { id:'tp5',  name:'Bamboo Jersey Tank Top',                       price:'$19.90',  rating:4.7, colors:['#1a1a1a','#f5f0e8','#1a2840','#98a890','#8a4a30'], badge:null, type:'Tank Tops',  material:'Bamboo',     style:'Casual',  img:'https://images.unsplash.com/photo-1525507119428-b5db9ca90a5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Tank Tops' },
    { id:'tp6',  name:'Pima Cotton Button-Down Shirt',                price:'$34.90',  rating:4.8, colors:['#f5f0e8','#1a2840','#888'], badge:'New',                   type:'Button-Downs', material:'Cotton',     style:'Classic', img:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Button-Downs' },
    { id:'tp7',  name:'Cashmere Short-Sleeve Crop Top',               price:'$44.90',  rating:4.6, colors:['#f5f0e8','#1a1a1a','#c4a870'], badge:null,                 type:'Crop Tops',    material:'Cashmere',   style:'Casual',  img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Crop Tops' },
    { id:'tp8',  name:'European Linen Long-Sleeve Henley',            price:'$29.90',  rating:4.7, colors:['#d4c8b8','#98a890','#f5f0e8'], badge:null,                 type:'Long Sleeve',  material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Long Sleeve' },
    { id:'tp9',  name:'Organic Cotton Ribbed Long-Sleeve Top',        price:'$24.90',  rating:4.8, colors:['#1a1a1a','#f5f0e8','#8a4a30','#98a890'], badge:'New',      type:'Long Sleeve',  material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Long Sleeve' },
    { id:'tp10', name:'100% Silk Sleeveless Blouse',                  price:'$79.90',  rating:4.9, colors:['#f5f0e8','#e8b8b0','#1a1a1a'], badge:'Best seller',       type:'Blouses',      material:'Silk',       style:'Luxury',  img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Blouses' },
    { id:'tp11', name:'French Terry Cropped Sweatshirt',              price:'$34.90',  rating:4.7, colors:['#d4c8b8','#888','#1a1a1a','#98a890'], badge:'New',         type:'Crop Tops',    material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Crop Tops' },
    { id:'tp12', name:'Merino Wool Fine-Knit Sleeveless Top',         price:'$44.90',  rating:4.8, colors:['#c4a870','#1a1a1a','#1a2840'], badge:null,                 type:'Tank Tops',    material:'Merino Wool',style:'Classic', img:'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Tank Tops' },
    { id:'tp13', name:'Organic Cotton Gauze Blouse',                  price:'$34.90',  rating:4.7, colors:['#f5f0e8','#e8b8b0','#98a890'], badge:null,                 type:'Blouses',      material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1487222477894-d3f4d71e2b01?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Blouses' },
    { id:'tp14', name:'Bamboo Long-Sleeve Fitted Tee',                price:'$22.90',  rating:4.8, colors:['#1a1a1a','#f5f0e8','#8a4a30','#1a2840','#888'], badge:'New', type:'Long Sleeve', material:'Bamboo',    style:'Casual',  img:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Long Sleeve' },
    { id:'tp15', name:'Cashmere Fitted V-Neck Blouse',                price:'$69.90',  rating:4.9, colors:['#f5f0e8','#c4a870','#e8b8b0','#1a1a1a'], badge:'Best seller', type:'Blouses',   material:'Cashmere',   style:'Luxury',  img:'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Blouses' },
    { id:'tp16', name:'Tencel Relaxed Short-Sleeve Top',              price:'$24.90',  rating:4.7, colors:['#d4c8b8','#98a890','#8a4a30','#1a1a1a'], badge:'New',       type:'T-Shirts',     material:'Tencel',     style:'Casual',  img:'https://images.unsplash.com/photo-1525507119428-b5db9ca90a5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'T-Shirts' },
    { id:'tp17', name:'Silk Charmeuse Wrap Top',                      price:'$89.90',  rating:4.8, colors:['#e8b8b0','#f5f0e8','#1a1a1a'], badge:null,                 type:'Blouses',      material:'Silk',       style:'Luxury',  img:'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Blouses' },
    { id:'tp18', name:'Organic Cotton Boxy Crop Tee',                 price:'$19.90',  rating:4.7, colors:['#f5f0e8','#1a1a1a','#98a890','#888'], badge:'New',         type:'Crop Tops',    material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Crop Tops' },
    { id:'tp19', name:'Striped Linen Button-Down Shirt',              price:'$44.90',  rating:4.6, colors:['#1a2840','#f5f0e8','#98a890'], badge:null,                  type:'Button-Downs', material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Button-Downs' },
    { id:'tp20', name:'Pima Cotton Polo Top',                         price:'$39.90',  rating:4.6, colors:['#1a2840','#f5f0e8','#888','#1a1a1a'], badge:null,          type:'Button-Downs', material:'Cotton',     style:'Classic', img:'https://images.unsplash.com/photo-1475259003090-0f5d1fa64869?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Button-Downs' }
  ],
  dresses: [
    { id:'dr1',  name:'Cotton Cashmere Ribbed Long Sleeve V-Neck Midi Dress', price:'$79.90',  rating:4.7, colors:['#8a4a30','#1a2840','#1a1a1a'], badge:'New',        type:'Midi Dresses', material:'Cotton Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Midi Dresses' },
    { id:'dr2',  name:'European Linen A-Line Midi Dress',                     price:'$59.90',  rating:4.8, colors:['#f5f0e8','#98a890','#d4c8b8'], badge:'New',        type:'Midi Dresses', material:'Linen',           style:'Casual',  img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Midi Dresses' },
    { id:'dr3',  name:'Silk Slip Maxi Dress',                                 price:'$99.90',  rating:4.9, colors:['#f5f0e8','#e8b8b0','#1a1a1a','#98a890'], badge:'Best seller', type:'Maxi Dresses',material:'Silk',style:'Luxury',img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Maxi Dresses' },
    { id:'dr4',  name:'Organic Cotton Wrap Mini Dress',                       price:'$49.90',  rating:4.6, colors:['#1a2840','#8a4a30','#1a1a1a'], badge:'New',        type:'Mini Dresses', material:'Cotton',          style:'Casual',  img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Mini Dresses' },
    { id:'dr5',  name:'Merino Wool Knit Midi Dress',                          price:'$89.90',  rating:4.8, colors:['#1a1a1a','#3a3a3a','#6a1a30'], badge:null,         type:'Knit Dresses', material:'Merino Wool',     style:'Classic', img:'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Knit Dresses' },
    { id:'dr6',  name:'Pima Cotton Maxi Wrap Dress',                          price:'$64.90',  rating:4.7, colors:['#f5f0e8','#e8b8b0','#98a890','#d4c8b8'], badge:'New', type:'Maxi Dresses',material:'Cotton',style:'Casual',img:'https://images.unsplash.com/photo-1485968579580-b6d065642315?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Maxi Dresses' },
    { id:'dr7',  name:'Tencel Wrap Midi Dress',                               price:'$54.90',  rating:4.6, colors:['#98a890','#d4c8b8','#8a4a30'], badge:null,         type:'Midi Dresses', material:'Tencel',          style:'Casual',  img:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wrap Dresses' },
    { id:'dr8',  name:'Bamboo Jersey T-Shirt Dress',                          price:'$39.90',  rating:4.7, colors:['#1a1a1a','#1a2840','#888','#f5f0e8'], badge:'New',  type:'Mini Dresses', material:'Bamboo',          style:'Casual',  img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Mini Dresses' },
    { id:'dr9',  name:'Silk Charmeuse Slip Dress',                            price:'$119.00', rating:4.9, colors:['#f5f0e8','#1a1a1a','#e8b8b0','#c4a870'], badge:'Best seller', type:'Slip Dresses',material:'Silk',style:'Luxury',img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Slip Dresses' },
    { id:'dr10', name:'European Linen Shirt Dress',                           price:'$69.90',  rating:4.7, colors:['#f5f0e8','#1a2840','#d4c8b8'], badge:null,         type:'Midi Dresses', material:'Linen',           style:'Classic', img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Midi Dresses' },
    { id:'dr11', name:'Cashmere Knit Fitted Mini Dress',                      price:'$89.90',  rating:4.8, colors:['#1a1a1a','#6a1a30','#1a2840'], badge:'New',        type:'Knit Dresses', material:'Cashmere',        style:'Classic', img:'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Knit Dresses' },
    { id:'dr12', name:'Organic Cotton Maxi Shift Dress',                      price:'$59.90',  rating:4.6, colors:['#f5f0e8','#98a890','#1a2840','#d4c8b8'], badge:null, type:'Maxi Dresses',material:'Cotton',style:'Casual',img:'https://images.unsplash.com/photo-1475259003090-0f5d1fa64869?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Maxi Dresses' },
    { id:'dr13', name:'French Terry Sweatshirt Dress',                        price:'$49.90',  rating:4.7, colors:['#888','#d4c8b8','#1a1a1a','#98a890'], badge:'New',  type:'Mini Dresses', material:'Cotton',          style:'Casual',  img:'https://images.unsplash.com/photo-1487222477894-d3f4d71e2b01?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Mini Dresses' },
    { id:'dr14', name:'Merino Wool Open-Back Midi Dress',                     price:'$99.90',  rating:4.8, colors:['#1a1a1a','#c4a870','#f5f0e8'], badge:'Best seller', type:'Midi Dresses', material:'Merino Wool',    style:'Classic', img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Midi Dresses' },
    { id:'dr15', name:'100% Silk Shirt Dress',                                price:'$129.00', rating:4.9, colors:['#f5f0e8','#e8b8b0','#1a1a1a'], badge:'Best seller', type:'Midi Dresses', material:'Silk',           style:'Luxury',  img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Slip Dresses' },
    { id:'dr16', name:'Tencel Floral Wrap Maxi Dress',                        price:'$74.90',  rating:4.6, colors:['#98a890','#e8b8b0','#f5f0e8'], badge:'New',        type:'Maxi Dresses', material:'Tencel',          style:'Casual',  img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wrap Dresses' }
  ],
  bedding: [
    { id:'bd1',  name:'Bamboo Sheet Set',                      price:'From $100.00', rating:4.8, colors:['#f5f0e8','#888','#98a890','#1a2840','#d4c8b8'], badge:'Bundle and save', type:'Sheet Sets',   material:'Bamboo',  style:'Classic', img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=80', subcat:'Sheet Sets' },
    { id:'bd2',  name:'European Linen Sheet Set',              price:'From $144.00', rating:4.7, colors:['#f5f0e8','#d4c8b8','#98a890','#1a2840','#e8b8b0'], badge:'Bundle and save',type:'Sheet Sets',   material:'Linen',   style:'Classic', img:'assets/images/bed.avif', subcat:'Sheet Sets' },
    { id:'bd3',  name:'Organic Percale Cotton Sheet Set',      price:'From $89.90',  rating:4.8, colors:['#f5f0e8','#888','#1a2840','#98a890'], badge:'New',                        type:'Sheet Sets',   material:'Cotton',  style:'Classic', img:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80', subcat:'Sheet Sets' },
    { id:'bd4',  name:'Bamboo Duvet Cover',                    price:'From $79.90',  rating:4.8, colors:['#f5f0e8','#888','#1a2840','#98a890','#d4c8b8'], badge:'Best seller',      type:'Duvet Covers', material:'Bamboo',  style:'Classic', img:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=80', subcat:'Duvet Covers' },
    { id:'bd5',  name:'Everyday Cozy Throw Blanket',           price:'$29.90',       rating:4.8, colors:['#d4c8b8','#98a890','#888','#e8b8b0','#f5f0e8'], badge:'New',             type:'Throws',       material:'Cotton',  style:'Casual',  img:'assets/images/cozy.jpeg', subcat:'Throws' },
    { id:'bd6',  name:'European Linen Duvet Cover',            price:'From $119.00', rating:4.7, colors:['#f5f0e8','#d4c8b8','#98a890','#1a2840'], badge:null,                     type:'Duvet Covers', material:'Linen',   style:'Classic', img:'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=500&auto=format&fit=crop&q=80', subcat:'Duvet Covers' },
    { id:'bd7',  name:'Organic Cotton Waffle Pillowcase Set',  price:'$39.90',       rating:4.9, colors:['#f5f0e8','#98a890','#d4c8b8'], badge:'Best seller',                     type:'Pillowcases',  material:'Cotton',  style:'Classic', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=80', subcat:'Pillowcases' },
    { id:'bd8',  name:'Cashmere Throw Blanket',                price:'$89.90',       rating:4.9, colors:['#d4c8b8','#888','#1a2840','#c4a870'], badge:'Best seller',              type:'Throws',       material:'Cashmere',style:'Luxury',  img:'assets/images/cashmere.avif', subcat:'Throws' },
    { id:'bd9',  name:'Bamboo Quilted Comforter',              price:'From $99.90',  rating:4.8, colors:['#f5f0e8','#888','#1a2840'], badge:null,                                 type:'Quilts',       material:'Bamboo',  style:'Classic', img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=80', subcat:'Quilts' },
    { id:'bd10', name:'Linen Stonewash Pillowcase Pair',       price:'$29.90',       rating:4.7, colors:['#f5f0e8','#d4c8b8','#98a890','#e8b8b0','#1a2840'], badge:'New',         type:'Pillowcases',  material:'Linen',   style:'Classic', img:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80', subcat:'Pillowcases' },
    { id:'bd11', name:'Organic Cotton Sateen Sheet Set',       price:'From $99.90',  rating:4.8, colors:['#f5f0e8','#888','#1a2840','#98a890'], badge:null,                      type:'Sheet Sets',   material:'Cotton',  style:'Classic', img:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=80', subcat:'Sheet Sets' },
    { id:'bd12', name:'European Linen Quilted Duvet Insert',   price:'$119.00',      rating:4.6, colors:['#f5f0e8','#d4c8b8'], badge:null,                                       type:'Quilts',       material:'Linen',   style:'Classic', img:'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=500&auto=format&fit=crop&q=80', subcat:'Quilts' },
    { id:'bd13', name:'Cashmere Bed Throw',                    price:'$129.00',      rating:4.9, colors:['#c4a870','#d4c8b8','#888','#f5f0e8'], badge:'Best seller',             type:'Throws',       material:'Cashmere',style:'Luxury',  img:'assets/images/cozy.jpeg', subcat:'Throws' },
    { id:'bd14', name:'Bamboo Jersey Fitted Sheet',            price:'From $49.90',  rating:4.8, colors:['#f5f0e8','#888','#98a890','#1a2840','#d4c8b8'], badge:null,           type:'Sheet Sets',   material:'Bamboo',  style:'Classic', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=80', subcat:'Sheet Sets' },
    { id:'bd15', name:'European Linen Pillowcase Pair',        price:'$44.90',       rating:4.8, colors:['#f5f0e8','#d4c8b8','#98a890','#e8b8b0'], badge:null,                  type:'Pillowcases',  material:'Linen',   style:'Classic', img:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80', subcat:'Pillowcases' },
    { id:'bd16', name:'Organic Cotton Knit Throw',             price:'$49.90',       rating:4.7, colors:['#f5f0e8','#98a890','#888','#c4a870'], badge:'New',                    type:'Throws',       material:'Cotton',  style:'Classic', img:'assets/images/cozy.jpeg', subcat:'Throws' }
  ],
  cashmere: [
    { id:'cs1',  name:'Mongolian Cashmere Crewneck Sweater',       price:'$50.00',  rating:4.9, colors:['#1a1a1a','#1a2840','#888','#c4a870','#f5f0e8'], badge:'Best seller', type:'Cashmere Sweaters',   material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'cs2',  name:'Mongolian Cashmere Cardigan',               price:'$79.90',  rating:4.8, colors:['#c4a870','#1a1a1a','#1a2840','#6a1a30'], badge:null,                  type:'Cashmere Cardigans',  material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Cardigans' },
    { id:'cs3',  name:'Mongolian Cashmere Tee',                    price:'$49.90',  rating:4.8, colors:['#3a3a3a','#888','#1a2840','#f5f0e8'], badge:'Best seller',             type:'Cashmere Tees',       material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Tees' },
    { id:'cs4',  name:'Mongolian Cashmere Cropped Crew Cardigan',  price:'$89.90',  rating:4.9, colors:['#1a1a1a','#6a1a30','#c4a870','#8a2020'], badge:'Best seller',          type:'Cashmere Cardigans',  material:'Cashmere', style:'Classic', img:'assets/images/mongo.jpeg', subcat:'Cashmere Cardigans' },
    { id:'cs5',  name:'Mongolian Cashmere V-Neck Sweater',         price:'$59.90',  rating:4.9, colors:['#1a1a1a','#1a2840','#888','#c4a870','#f5f0e8'], badge:null,            type:'Cashmere Sweaters',   material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'cs6',  name:'Cashmere Fisherman Crew',                   price:'$89.90',  rating:4.9, colors:['#f5f0e8','#888','#1a2840'], badge:null,                                type:'Cashmere Sweaters',   material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'cs7',  name:'Cashmere Cozy Cardigan',                    price:'$99.90',  rating:4.8, colors:['#d4c8b8','#f5f0e8','#c4a870'], badge:null,                             type:'Cashmere Cardigans',  material:'Cashmere', style:'Casual',  img:'assets/images/cardigan.jpeg', subcat:'Cashmere Cardigans' },
    { id:'cs8',  name:'Cashmere Turtleneck Sweater',               price:'$69.90',  rating:4.7, colors:['#1a1a1a','#888','#c4a870','#f5f0e8'], badge:null,                     type:'Cashmere Sweaters',   material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'cs9',  name:'Cashmere Sleeveless Shell',                 price:'$44.90',  rating:4.8, colors:['#1a1a1a','#f5f0e8','#1a2840','#c4a870'], badge:null,                  type:'Cashmere Accessories',material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Accessories' },
    { id:'cs10', name:'Cashmere Two-Piece Sweater Set',            price:'$159.00', rating:4.9, colors:['#f5f0e8','#d4c8b8','#c4a870','#1a1a1a'], badge:'Best seller',          type:'Cashmere Sets',       material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sets' },
    { id:'cs11', name:'Mongolian Cashmere Crewneck Dress',         price:'$99.90',  rating:4.8, colors:['#1a1a1a','#1a2840','#3a3a3a'], badge:'New',                            type:'Cashmere Sweaters',   material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Sweaters' },
    { id:'cs12', name:'Cashmere Beanie Hat',                       price:'$34.90',  rating:4.8, colors:['#c4a870','#1a1a1a','#888','#1a2840','#6a1a30'], badge:'Best seller',   type:'Cashmere Accessories',material:'Cashmere', style:'Classic', img:'assets/images/cashmere.avif', subcat:'Cashmere Accessories' },
    { id:'cs13', name:'Cashmere Oversized Wrap Sweater',           price:'$129.00', rating:4.9, colors:['#d4c8b8','#f5f0e8','#c4a870','#888'], badge:null,                     type:'Cashmere Cardigans',  material:'Cashmere', style:'Luxury',  img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Cardigans' },
    { id:'cs14', name:'Cashmere Wrist Warmers',                    price:'$29.90',  rating:4.7, colors:['#f5f0e8','#888','#c4a870','#1a1a1a'], badge:null,                     type:'Cashmere Accessories',material:'Cashmere', style:'Classic', img:'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Cashmere Accessories' }
  ],
  bags: [
    { id:'bg1',  name:'Italian Leather Tote Bag',           price:'$168.00', rating:4.8, colors:['#1a1a1a','#c4a870','#6a4030'], badge:'New',        type:'Tote Bags',    material:'Leather', style:'Classic', img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=80', subcat:'Tote Bags' },
    { id:'bg2',  name:'Sutton Shoulder Bag',                price:'$168.00', rating:4.7, colors:['#1a1a1a','#6a4030','#c4a870'], badge:'New',        type:'Shoulder Bags',material:'Leather', style:'Classic', img:'assets/images/bags.avif', subcat:'Shoulder Bags' },
    { id:'bg3',  name:'Mini Crossbody Bag',                 price:'$89.90',  rating:4.6, colors:['#1a1a1a','#c4a870','#6a1a30'], badge:'New',        type:'Crossbody',    material:'Leather', style:'Casual',  img:'https://images.unsplash.com/photo-1590739293931-a38e89c4e6df?w=500&auto=format&fit=crop&q=80', subcat:'Crossbody' },
    { id:'bg4',  name:'Large Leather Tote',                 price:'$198.00', rating:4.9, colors:['#1a1a1a','#c4a870'], badge:'Best seller',          type:'Tote Bags',    material:'Leather', style:'Classic', img:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=80', subcat:'Tote Bags' },
    { id:'bg5',  name:'Woven Leather Belt Bag',             price:'$79.90',  rating:4.7, colors:['#c4a870','#1a1a1a','#6a4030'], badge:'New',        type:'Belt Bags',    material:'Leather', style:'Casual',  img:'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop&q=80', subcat:'Belt Bags' },
    { id:'bg6',  name:'Suede Mini Backpack',                price:'$129.00', rating:4.6, colors:['#c4a870','#1a1a1a','#888'], badge:null,             type:'Backpacks',    material:'Suede',   style:'Casual',  img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80', subcat:'Backpacks' },
    { id:'bg7',  name:'Leather Frame Clutch',               price:'$99.90',  rating:4.8, colors:['#1a1a1a','#c4a870','#6a1a30','#f5f0e8'], badge:'New', type:'Clutches', material:'Leather', style:'Classic', img:'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=500&auto=format&fit=crop&q=80', subcat:'Clutches' },
    { id:'bg8',  name:'Italian Leather Shoulder Bag',       price:'$149.00', rating:4.7, colors:['#1a1a1a','#c4a870'], badge:'Best seller',          type:'Shoulder Bags',material:'Leather', style:'Classic', img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=80', subcat:'Shoulder Bags' },
    { id:'bg9',  name:'Canvas & Leather Tote',              price:'$99.90',  rating:4.6, colors:['#c4a870','#1a2840','#1a1a1a'], badge:null,          type:'Tote Bags',    material:'Canvas',  style:'Casual',  img:'https://images.unsplash.com/photo-1590739293931-a38e89c4e6df?w=500&auto=format&fit=crop&q=80', subcat:'Tote Bags' },
    { id:'bg10', name:'Leather Zip Crossbody',              price:'$119.00', rating:4.8, colors:['#1a1a1a','#6a1a30','#c4a870'], badge:'New',         type:'Crossbody',    material:'Leather', style:'Classic', img:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=80', subcat:'Crossbody' },
    { id:'bg11', name:'Woven Belt Bag Mini',                price:'$59.90',  rating:4.5, colors:['#c4a870','#1a1a1a','#f5f0e8'], badge:'New',         type:'Belt Bags',    material:'Leather', style:'Casual',  img:'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop&q=80', subcat:'Belt Bags' },
    { id:'bg12', name:'Italian Leather Backpack',           price:'$179.00', rating:4.8, colors:['#1a1a1a','#c4a870','#6a4030'], badge:'Best seller', type:'Backpacks',    material:'Leather', style:'Classic', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80', subcat:'Backpacks' },
    { id:'bg13', name:'Suede Clutch Evening Bag',           price:'$89.90',  rating:4.7, colors:['#1a1a1a','#6a1a30','#f5f0e8','#c4a870'], badge:null, type:'Clutches',   material:'Suede',   style:'Classic', img:'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=500&auto=format&fit=crop&q=80', subcat:'Clutches' },
    { id:'bg14', name:'Structured Top Handle Bag',          price:'$158.00', rating:4.9, colors:['#1a1a1a','#c4a870','#6a4030'], badge:'Best seller', type:'Shoulder Bags',material:'Leather', style:'Luxury',  img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=80', subcat:'Shoulder Bags' }
  ],
  pants: [
    { id:'pt1',  name:'Italian Stretch Wool Wide-Leg Trouser', price:'$89.90',  rating:4.8, colors:['#1a1a1a','#1a2840','#888','#c4a870'], badge:'New',       type:'Trousers',    material:'Wool',       style:'Classic', img:'assets/images/pants.avif', subcat:'Wide Leg' },
    { id:'pt2',  name:'European Linen Wide-Leg Pant',          price:'$64.90',  rating:4.7, colors:['#f5f0e8','#1a2840','#d4c8b8','#98a890'], badge:'New',   type:'Wide Leg',     material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wide Leg' },
    { id:'pt3',  name:'Bamboo Knit Jogger Pant',               price:'$44.90',  rating:4.8, colors:['#1a1a1a','#888','#1a2840','#d4c8b8'], badge:'Best seller', type:'Joggers',   material:'Bamboo',     style:'Casual',  img:'https://images.unsplash.com/photo-1525507119428-b5db9ca90a5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Joggers' },
    { id:'pt4',  name:'Organic Cotton Straight-Leg Pant',      price:'$54.90',  rating:4.7, colors:['#1a1a1a','#f5f0e8','#1a2840','#c4a870'], badge:null,     type:'Straight Leg', material:'Cotton',     style:'Classic', img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Straight Leg' },
    { id:'pt5',  name:'Merino Wool Tailored Trousers',         price:'$79.90',  rating:4.8, colors:['#3a3a3a','#1a2840','#1a1a1a','#c4a870'], badge:'New',    type:'Trousers',    material:'Merino Wool', style:'Classic',img:'https://images.unsplash.com/photo-1487222477894-d3f4d71e2b01?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Trousers' },
    { id:'pt6',  name:'Pima Cotton Drawstring Shorts',         price:'$29.90',  rating:4.6, colors:['#f5f0e8','#1a2840','#888','#98a890','#d4c8b8'], badge:'New', type:'Shorts',  material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1475259003090-0f5d1fa64869?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Shorts' },
    { id:'pt7',  name:'European Linen Straight Pant',          price:'$59.90',  rating:4.7, colors:['#f5f0e8','#d4c8b8','#1a2840','#888'], badge:null,        type:'Straight Leg', material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Straight Leg' },
    { id:'pt8',  name:'Italian Stretch Slim Trouser',          price:'$94.90',  rating:4.8, colors:['#1a1a1a','#1a2840','#3a3a3a'], badge:'Best seller',      type:'Trousers',    material:'Wool',       style:'Classic', img:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Trousers' },
    { id:'pt9',  name:'Bamboo French Terry Sweatpants',        price:'$49.90',  rating:4.7, colors:['#888','#1a1a1a','#f5f0e8','#d4c8b8'], badge:'New',       type:'Joggers',     material:'Bamboo',     style:'Casual',  img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Joggers' },
    { id:'pt10', name:'Linen Cropped Wide-Leg Pant',           price:'$54.90',  rating:4.6, colors:['#f5f0e8','#98a890','#d4c8b8','#c4a870'], badge:null,     type:'Wide Leg',    material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wide Leg' },
    { id:'pt11', name:'Organic Cotton Biker Shorts',           price:'$24.90',  rating:4.7, colors:['#1a1a1a','#888','#1a2840'], badge:null,                  type:'Shorts',      material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Shorts' },
    { id:'pt12', name:'French Terry Relaxed Jogger',           price:'$44.90',  rating:4.8, colors:['#888','#d4c8b8','#1a1a1a','#1a2840'], badge:'Best seller', type:'Joggers',   material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Joggers' }
  ],
  furniture: [
    { id:'fn1',  name:'Luxe Modular Sofa',                  price:'From $1,299.00', rating:4.8, colors:['#888','#f5f0e8','#1a2840','#d4c8b8'], badge:'New',       type:'Sofas',   material:'Fabric',  style:'Modern',  img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=80', subcat:'Sofas' },
    { id:'fn2',  name:'Wavy Wood Round Wall Mirror',         price:'$129.00',        rating:4.9, colors:['#c4a870'], badge:'Best seller',                          type:'Storage', material:'Wood',    style:'Modern',  img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80', subcat:'Storage' },
    { id:'fn3',  name:'Organic Wool Area Rug 5x8',           price:'$249.00',        rating:4.7, colors:['#f5f0e8','#d4c8b8','#98a890','#c4a870'], badge:'New',    type:'Rugs',    material:'Wool',    style:'Classic', img:'assets/images/rugs.webp', subcat:'Rugs' },
    { id:'fn4',  name:'Rattan Accent Chair',                 price:'$329.00',        rating:4.6, colors:['#c4a870'], badge:'New',                                  type:'Chairs',  material:'Rattan',  style:'Casual',  img:'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=80', subcat:'Chairs' },
    { id:'fn5',  name:'Marble Coffee Table',                 price:'$449.00',        rating:4.7, colors:['#f5f0e8','#888'], badge:'New',                           type:'Tables',  material:'Marble',  style:'Modern',  img:'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=500&auto=format&fit=crop&q=80', subcat:'Tables' },
    { id:'fn6',  name:'Linen Platform Bed Frame',            price:'$599.00',        rating:4.8, colors:['#f5f0e8','#888','#1a2840','#d4c8b8'], badge:'Best seller', type:'Beds',   material:'Linen',   style:'Classic', img:'assets/images/bed.avif', subcat:'Beds' },
    { id:'fn7',  name:'Rattan Media Console',                price:'$389.00',        rating:4.6, colors:['#c4a870','#1a1a1a'], badge:'New',                        type:'Storage', material:'Rattan',  style:'Casual',  img:'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=200&auto=format&fit=crop&q=75', subcat:'Storage' },
    { id:'fn8',  name:'Artisan Ceramic Table Lamp',          price:'$149.00',        rating:4.8, colors:['#f5f0e8','#98a890','#c4a870'], badge:'New',              type:'Lighting',material:'Ceramic', style:'Modern',  img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&auto=format&fit=crop&q=75', subcat:'Lighting' },
    { id:'fn9',  name:'Solid Oak Dining Table',              price:'$899.00',        rating:4.9, colors:['#c4a870','#1a1a1a'], badge:'Best seller',                type:'Tables',  material:'Wood',    style:'Classic', img:'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=80', subcat:'Tables' },
    { id:'fn10', name:'Linen Cube Ottoman',                  price:'$229.00',        rating:4.7, colors:['#f5f0e8','#888','#d4c8b8','#98a890'], badge:'New',       type:'Chairs',  material:'Linen',   style:'Classic', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=80', subcat:'Chairs' },
    { id:'fn11', name:'Handwoven Jute Rug 8x10',             price:'$349.00',        rating:4.6, colors:['#c4a870','#f5f0e8'], badge:null,                        type:'Rugs',    material:'Jute',    style:'Casual',  img:'assets/images/rugs.webp', subcat:'Rugs' },
    { id:'fn12', name:'Boucle Accent Chair',                 price:'$479.00',        rating:4.8, colors:['#f5f0e8','#d4c8b8','#c4a870'], badge:'New',             type:'Chairs',  material:'Boucle',  style:'Modern',  img:'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=80', subcat:'Chairs' }
  ],
  jewelry: [
    { id:'jw1',  name:'14K Gold Thin Hoop Earrings',          price:'$45.00',  rating:4.9, colors:['#c9a84c'], badge:'New',         type:'Earrings',  material:'Gold',  style:'Classic', img:'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&auto=format&fit=crop&q=80', subcat:'Earrings' },
    { id:'jw2',  name:'Sterling Silver Pendant Necklace',     price:'$35.00',  rating:4.8, colors:['#c0c0c0'], badge:'Best seller', type:'Necklaces', material:'Silver',style:'Classic', img:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80', subcat:'Necklaces' },
    { id:'jw3',  name:'Gold Vermeil Cuff Bracelet',           price:'$59.00',  rating:4.7, colors:['#c9a84c'], badge:'New',         type:'Bracelets', material:'Gold',  style:'Classic', img:'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=500&auto=format&fit=crop&q=80', subcat:'Bracelets' },
    { id:'jw4',  name:'Diamond-Accent Stacking Ring',         price:'$95.00',  rating:4.9, colors:['#c9a84c','#c0c0c0'], badge:'Best seller', type:'Rings',  material:'Gold',  style:'Luxury',  img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=80', subcat:'Rings' },
    { id:'jw5',  name:'Pearl Drop Earrings',                  price:'$55.00',  rating:4.8, colors:['#f5f0e8','#c9a84c'], badge:'New', type:'Earrings',  material:'Pearl', style:'Classic', img:'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&auto=format&fit=crop&q=80', subcat:'Earrings' },
    { id:'jw6',  name:'14K Gold Chain Necklace',              price:'$79.00',  rating:4.8, colors:['#c9a84c'], badge:null,          type:'Necklaces', material:'Gold',  style:'Classic', img:'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=500&auto=format&fit=crop&q=80', subcat:'Necklaces' },
    { id:'jw7',  name:'Dainty Pearl Tennis Bracelet',         price:'$69.00',  rating:4.7, colors:['#f5f0e8','#c0c0c0'], badge:'New', type:'Bracelets', material:'Pearl',style:'Classic', img:'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=500&auto=format&fit=crop&q=80', subcat:'Bracelets' },
    { id:'jw8',  name:'Gold Signet Ring',                     price:'$85.00',  rating:4.8, colors:['#c9a84c'], badge:'Best seller', type:'Rings',      material:'Gold',  style:'Classic', img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=80', subcat:'Rings' },
    { id:'jw9',  name:'Gold & Pearl Jewelry Set',             price:'$119.00', rating:4.9, colors:['#c9a84c','#f5f0e8'], badge:'New', type:'Sets',      material:'Gold',  style:'Luxury',  img:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80', subcat:'Sets' },
    { id:'jw10', name:'Layered Gold Chain Necklace Set',      price:'$99.00',  rating:4.8, colors:['#c9a84c'], badge:'Best seller', type:'Necklaces',  material:'Gold',  style:'Classic', img:'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=500&auto=format&fit=crop&q=80', subcat:'Necklaces' },
    { id:'jw11', name:'Huggie Hoop Earring Set',              price:'$49.00',  rating:4.7, colors:['#c9a84c','#c0c0c0'], badge:null,  type:'Earrings',  material:'Gold',  style:'Classic', img:'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&auto=format&fit=crop&q=80', subcat:'Earrings' },
    { id:'jw12', name:'Gold Bar Bracelet',                    price:'$59.00',  rating:4.6, colors:['#c9a84c'], badge:null,           type:'Bracelets', material:'Gold',  style:'Classic', img:'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=500&auto=format&fit=crop&q=80', subcat:'Bracelets' }
  ],
  outerwear: [
    { id:'ow1',  name:'Comfort Stretch Trench Coat',          price:'$104.00', rating:4.8, colors:['#c4a870','#3a3a3a','#1a2840','#1a1a1a','#888'], badge:'New',       type:'Trench Coats',  material:'Polyester',  style:'Classic', img:'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Trench Coats' },
    { id:'ow2',  name:'Faux Fur Maxi Wrap Coat',              price:'$130.00', rating:4.6, colors:['#1a1a1a','#f5f0e8','#c4a870'], badge:'New',                        type:'Trench Coats',  material:'Faux Fur',   style:'Luxury',  img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Trench Coats' },
    { id:'ow3',  name:'Italian Wool Cashmere Blend Coat',     price:'$199.00', rating:4.9, colors:['#c4a870','#3a3a3a','#1a1a1a','#1a2840'], badge:'Best seller',      type:'Wool Coats',    material:'Wool',       style:'Luxury',  img:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wool Coats' },
    { id:'ow4',  name:'European Linen Blazer',                price:'$89.90',  rating:4.7, colors:['#f5f0e8','#1a2840','#1a1a1a','#c4a870'], badge:'New',             type:'Blazers',       material:'Linen',      style:'Classic', img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Blazers' },
    { id:'ow5',  name:'Recycled Nylon Puffer Vest',           price:'$79.90',  rating:4.7, colors:['#1a1a1a','#1a2840','#2a5030','#8a4a30'], badge:'New',             type:'Puffer Jackets',material:'Nylon',      style:'Casual',  img:'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Puffer Jackets' },
    { id:'ow6',  name:'Merino Wool Overcoat',                 price:'$179.00', rating:4.8, colors:['#c4a870','#3a3a3a','#f5f0e8','#1a1a1a'], badge:'Best seller',     type:'Wool Coats',    material:'Merino Wool',style:'Luxury',  img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wool Coats' },
    { id:'ow7',  name:'Pima Cotton Trench Coat',              price:'$119.00', rating:4.7, colors:['#f5f0e8','#1a2840','#1a1a1a','#c4a870'], badge:'New',             type:'Trench Coats',  material:'Cotton',     style:'Classic', img:'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Trench Coats' },
    { id:'ow8',  name:'Italian Stretch Wool Blazer',          price:'$149.00', rating:4.8, colors:['#1a1a1a','#3a3a3a','#1a2840','#c4a870'], badge:'Best seller',     type:'Blazers',       material:'Wool',       style:'Classic', img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Blazers' },
    { id:'ow9',  name:'Down Puffer Long Coat',                price:'$139.00', rating:4.7, colors:['#1a1a1a','#1a2840','#2a5030','#c4a870'], badge:'New',             type:'Puffer Jackets',material:'Down',       style:'Casual',  img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Puffer Jackets' },
    { id:'ow10', name:'Recycled Polyester Rain Jacket',       price:'$89.90',  rating:4.6, colors:['#1a1a1a','#1a2840','#2a5030','#8a4a30'], badge:'New',             type:'Raincoats',     material:'Polyester',  style:'Casual',  img:'https://images.unsplash.com/photo-1525507119428-b5db9ca90a5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Raincoats' },
    { id:'ow11', name:'Double-Breasted Wool Coat',            price:'$169.00', rating:4.9, colors:['#c4a870','#3a3a3a','#f5f0e8'], badge:'Best seller',               type:'Wool Coats',    material:'Wool',       style:'Luxury',  img:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wool Coats' },
    { id:'ow12', name:'Linen Boyfriend Blazer',               price:'$79.90',  rating:4.7, colors:['#f5f0e8','#888','#d4c8b8'], badge:'New',                         type:'Blazers',       material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Blazers' }
  ],
  shoes: [
    { id:'sh1',  name:'Italian Leather & Suede Low Profile Sneaker',price:'$99.90',  rating:4.6, colors:['#f5f0e8','#1a1a1a','#888','#c4a870'], badge:'New',        type:'Sneakers',material:'Leather',style:'Casual',  img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80', subcat:'Sneakers' },
    { id:'sh2',  name:'Italian Suede Chelsea Boot',              price:'$149.00', rating:4.8, colors:['#1a1a1a','#c4a870','#6a4030'], badge:'Best seller',           type:'Boots',   material:'Suede',  style:'Classic', img:'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=80', subcat:'Boots' },
    { id:'sh3',  name:'Italian Leather Loafer',                  price:'$119.00', rating:4.7, colors:['#1a1a1a','#c4a870','#6a4030'], badge:'New',                  type:'Loafers', material:'Leather',style:'Classic', img:'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=500&auto=format&fit=crop&q=80', subcat:'Loafers' },
    { id:'sh4',  name:'Leather & Suede Ankle Boot',              price:'$159.00', rating:4.8, colors:['#1a1a1a','#6a4030','#c4a870'], badge:'Best seller',           type:'Boots',   material:'Leather',style:'Classic', img:'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=80', subcat:'Boots' },
    { id:'sh5',  name:'Leather Strappy Sandal',                  price:'$79.90',  rating:4.6, colors:['#f5f0e8','#c4a870','#1a1a1a'], badge:'New',                  type:'Sandals', material:'Leather',style:'Casual',  img:'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=80', subcat:'Sandals' },
    { id:'sh6',  name:'Italian Leather Block Heel Mule',         price:'$109.00', rating:4.7, colors:['#1a1a1a','#c4a870','#f5f0e8'], badge:'New',                  type:'Heels',   material:'Leather',style:'Classic', img:'https://images.unsplash.com/photo-1499971856191-1a420a42b498?w=500&auto=format&fit=crop&q=80', subcat:'Heels' },
    { id:'sh7',  name:'Suede Ballet Flat',                       price:'$89.90',  rating:4.8, colors:['#1a1a1a','#c4a870','#e8b8b0','#1a2840'], badge:'Best seller', type:'Flats',   material:'Suede',  style:'Classic', img:'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=500&auto=format&fit=crop&q=80', subcat:'Flats' },
    { id:'sh8',  name:'Italian Leather High-Top Sneaker',        price:'$119.00', rating:4.5, colors:['#f5f0e8','#1a1a1a'], badge:'New',                            type:'Sneakers',material:'Leather',style:'Casual',  img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80', subcat:'Sneakers' },
    { id:'sh9',  name:'Leather Knee-High Boot',                  price:'$199.00', rating:4.9, colors:['#1a1a1a','#6a4030'], badge:'Best seller',                    type:'Boots',   material:'Leather',style:'Luxury',  img:'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=80', subcat:'Boots' },
    { id:'sh10', name:'Leather Penny Loafer',                    price:'$129.00', rating:4.8, colors:['#6a4030','#1a1a1a','#c4a870'], badge:'Best seller',          type:'Loafers', material:'Leather',style:'Classic', img:'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=500&auto=format&fit=crop&q=80', subcat:'Loafers' },
    { id:'sh11', name:'Suede Block-Heel Sandal',                 price:'$99.90',  rating:4.7, colors:['#c4a870','#1a1a1a','#f5f0e8'], badge:'New',                  type:'Sandals', material:'Suede',  style:'Casual',  img:'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=80', subcat:'Sandals' },
    { id:'sh12', name:'Italian Leather Pointed Flat',            price:'$99.90',  rating:4.7, colors:['#1a1a1a','#c4a870','#f5f0e8','#e8b8b0'], badge:'New',        type:'Flats',   material:'Leather',style:'Classic', img:'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=500&auto=format&fit=crop&q=80', subcat:'Flats' }
  ],
  rugs: [
    { id:'rg1',  name:'Handwoven Wool Area Rug 5x8',       price:'$299.00',  rating:4.8, colors:['#f5f0e8','#d4c8b8','#c4a870'], badge:'New',         type:'Area Rugs',   material:'Wool',          style:'Classic', img:'assets/images/rugs.webp', subcat:'Area Rugs' },
    { id:'rg2',  name:'Moroccan-Style Wool Rug 8x10',      price:'$449.00',  rating:4.7, colors:['#f5f0e8','#c4a870','#888'], badge:'Best seller',     type:'Area Rugs',   material:'Wool',          style:'Casual',  img:'assets/images/rugs.webp', subcat:'Area Rugs' },
    { id:'rg3',  name:'Jute Braided Round Rug 6ft',        price:'$149.00',  rating:4.6, colors:['#c4a870','#d4c8b8'], badge:'New',                   type:'Round Rugs',  material:'Jute',          style:'Casual',  img:'assets/images/rugs.webp', subcat:'Round Rugs' },
    { id:'rg4',  name:'Wool Kilim Runner 2.5x8',           price:'$179.00',  rating:4.8, colors:['#f5f0e8','#8a4a30','#c4a870','#1a2840'], badge:null, type:'Runner Rugs', material:'Wool',          style:'Classic', img:'assets/images/rugs.webp', subcat:'Runner Rugs' },
    { id:'rg5',  name:'Indoor/Outdoor Polypropylene Rug',  price:'$199.00',  rating:4.7, colors:['#888','#f5f0e8','#1a2840'], badge:'New',              type:'Outdoor Rugs',material:'Polypropylene', style:'Casual',  img:'assets/images/rugs.webp', subcat:'Outdoor Rugs' },
    { id:'rg6',  name:'Handknotted Persian-Style Rug 6x9', price:'$549.00',  rating:4.9, colors:['#6a1a30','#f5f0e8','#1a2840'], badge:'Best seller',  type:'Area Rugs',   material:'Wool',          style:'Classic', img:'assets/images/rugs.webp', subcat:'Area Rugs' },
    { id:'rg7',  name:'Jute Sisal Natural Fiber Rug 5x8',  price:'$199.00',  rating:4.6, colors:['#c4a870','#d4c8b8'], badge:null,                    type:'Area Rugs',   material:'Jute',          style:'Casual',  img:'assets/images/rugs.webp', subcat:'Area Rugs' },
    { id:'rg8',  name:'Wool Shag Round Rug 5ft',           price:'$169.00',  rating:4.7, colors:['#f5f0e8','#888','#d4c8b8'], badge:'New',             type:'Round Rugs',  material:'Wool',          style:'Casual',  img:'assets/images/rugs.webp', subcat:'Round Rugs' },
    { id:'rg9',  name:'Cotton Flat-Weave Runner 2.5x10',   price:'$99.90',   rating:4.6, colors:['#f5f0e8','#1a2840','#8a4a30'], badge:'New',          type:'Runner Rugs', material:'Cotton',         style:'Classic', img:'assets/images/rugs.webp', subcat:'Runner Rugs' },
    { id:'rg10', name:'Recycled PET Outdoor Rug 4x6',      price:'$99.90',   rating:4.7, colors:['#1a2840','#888','#98a890'], badge:null,              type:'Outdoor Rugs',material:'Recycled PET',  style:'Casual',  img:'assets/images/rugs.webp', subcat:'Outdoor Rugs' },
    { id:'rg11', name:'Hand-Tufted Wool Rug 9x12',         price:'$599.00',  rating:4.9, colors:['#f5f0e8','#d4c8b8','#888'], badge:'Best seller',     type:'Area Rugs',   material:'Wool',          style:'Classic', img:'assets/images/rugs.webp', subcat:'Area Rugs' },
    { id:'rg12', name:'Woven Seagrass Round Rug 4ft',      price:'$89.90',   rating:4.5, colors:['#c4a870','#d4c8b8'], badge:'New',                   type:'Round Rugs',  material:'Seagrass',      style:'Casual',  img:'assets/images/rugs.webp', subcat:'Round Rugs' }
  ],
  skirts: [
    { id:'sk1',  name:'European Linen A-Line Midi Skirt',    price:'$49.90',  rating:4.8, colors:['#f5f0e8','#98a890','#1a2840','#d4c8b8'], badge:'New',       type:'Midi Skirts', material:'Linen',      style:'Classic', img:'assets/images/skirts.avif', subcat:'Midi Skirts' },
    { id:'sk2',  name:'Organic Cotton Wrap Mini Skirt',      price:'$39.90',  rating:4.7, colors:['#1a2840','#8a4a30','#1a1a1a','#f5f0e8'], badge:'New',      type:'Mini Skirts', material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Mini Skirts' },
    { id:'sk3',  name:'Merino Wool Pleated Maxi Skirt',      price:'$79.90',  rating:4.8, colors:['#1a1a1a','#3a3a3a','#6a1a30','#1a2840'], badge:'Best seller', type:'Maxi Skirts',material:'Merino Wool',style:'Classic',img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Maxi Skirts' },
    { id:'sk4',  name:'Cotton Gauze Tiered Midi Skirt',      price:'$54.90',  rating:4.7, colors:['#f5f0e8','#98a890','#e8b8b0','#d4c8b8'], badge:'New',      type:'Midi Skirts', material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Midi Skirts' },
    { id:'sk5',  name:'Italian Wool Pencil Skirt',           price:'$69.90',  rating:4.6, colors:['#1a1a1a','#3a3a3a','#1a2840','#c4a870'], badge:null,       type:'Midi Skirts', material:'Wool',       style:'Classic', img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Midi Skirts' },
    { id:'sk6',  name:'Tencel Wrap Midi Skirt',              price:'$44.90',  rating:4.7, colors:['#98a890','#d4c8b8','#8a4a30','#f5f0e8'], badge:'New',      type:'Wrap Skirts', material:'Tencel',     style:'Casual',  img:'https://images.unsplash.com/photo-1485968579580-b6d065642315?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wrap Skirts' },
    { id:'sk7',  name:'Linen Pleated Maxi Skirt',            price:'$64.90',  rating:4.8, colors:['#f5f0e8','#d4c8b8','#1a2840'], badge:'Best seller',       type:'Pleated',     material:'Linen',      style:'Classic', img:'https://images.unsplash.com/photo-1475259003090-0f5d1fa64869?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Pleated' },
    { id:'sk8',  name:'Organic Cotton Mini Skirt',           price:'$34.90',  rating:4.6, colors:['#1a1a1a','#1a2840','#f5f0e8','#c4a870'], badge:'New',     type:'Mini Skirts', material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1487222477894-d3f4d71e2b01?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Mini Skirts' },
    { id:'sk9',  name:'Cashmere Blend Knit Midi Skirt',      price:'$89.90',  rating:4.8, colors:['#1a1a1a','#6a1a30','#c4a870'], badge:'New',                type:'Midi Skirts', material:'Cashmere',   style:'Classic', img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Midi Skirts' },
    { id:'sk10', name:'Bamboo Jersey Wrap Skirt',            price:'$39.90',  rating:4.7, colors:['#1a1a1a','#1a2840','#888','#8a4a30'], badge:null,         type:'Wrap Skirts', material:'Bamboo',     style:'Casual',  img:'https://images.unsplash.com/photo-1523380744952-b8a4e50bacc3?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Wrap Skirts' },
    { id:'sk11', name:'Pleated Satin Midi Skirt',            price:'$59.90',  rating:4.6, colors:['#888','#c4a870','#1a1a1a'], badge:'New',                   type:'Pleated',     material:'Polyester',  style:'Classic', img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Pleated' },
    { id:'sk12', name:'Denim A-Line Mini Skirt',             price:'$44.90',  rating:4.7, colors:['#1a2840','#1a1a1a','#888'], badge:null,                    type:'Denim Skirts',material:'Denim',      style:'Casual',  img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Denim Skirts' }
  ],
  men: [
    { id:'mn1',  name:'Mongolian Cashmere Crewneck Sweater',      price:'$59.90',  rating:4.9, colors:['#1a1a1a','#1a2840','#888','#c4a870','#f5f0e8'], badge:'Best seller', type:'Sweaters',    material:'Cashmere',   style:'Classic', img:'assets/images/men.avif', subcat:'Sweaters' },
    { id:'mn2',  name:'100% Pima Cotton Classic Fit Tee',         price:'$20.00',  rating:4.8, colors:['#1a1a1a','#f5f0e8','#888','#1a2840','#8a4a30'], badge:'New',        type:'T-Shirts',    material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'T-Shirts' },
    { id:'mn3',  name:'Italian Stretch Wool Slim Trousers',       price:'$94.90',  rating:4.8, colors:['#3a3a3a','#1a2840','#1a1a1a','#c4a870'], badge:'New',               type:'Pants',       material:'Wool',       style:'Classic', img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Pants' },
    { id:'mn4',  name:'Italian Wool Cashmere Blend Overcoat',     price:'$199.00', rating:4.9, colors:['#c4a870','#3a3a3a','#1a2840','#1a1a1a'], badge:'Best seller',       type:'Outerwear',   material:'Wool',       style:'Luxury',  img:'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Outerwear' },
    { id:'mn5',  name:'Merino Wool V-Neck Sweater',               price:'$54.90',  rating:4.7, colors:['#3a3a3a','#1a2840','#c4a870','#2a5030'], badge:'New',               type:'Sweaters',    material:'Merino Wool',style:'Classic', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Sweaters' },
    { id:'mn6',  name:'European Linen Button-Down Shirt',         price:'$39.90',  rating:4.8, colors:['#f5f0e8','#1a2840','#98a890','#888'], badge:'New',                  type:'T-Shirts',    material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'T-Shirts' },
    { id:'mn7',  name:'Bamboo French Terry Jogger',               price:'$49.90',  rating:4.7, colors:['#888','#1a1a1a','#1a2840','#d4c8b8'], badge:'Best seller',          type:'Pants',       material:'Bamboo',     style:'Casual',  img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Pants' },
    { id:'mn8',  name:'Italian Leather & Suede Sneaker',          price:'$99.90',  rating:4.6, colors:['#f5f0e8','#1a1a1a','#888'], badge:'New',                            type:'Accessories', material:'Leather',    style:'Casual',  img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80', subcat:'Accessories' },
    { id:'mn9',  name:'Cashmere Cardigan',                        price:'$79.90',  rating:4.8, colors:['#1a2840','#888','#c4a870','#3a3a3a'], badge:'Best seller',          type:'Sweaters',    material:'Cashmere',   style:'Classic', img:'assets/images/cardigan.jpeg', subcat:'Sweaters' },
    { id:'mn10', name:'Organic Cotton Wide-Leg Trouser',          price:'$59.90',  rating:4.7, colors:['#f5f0e8','#1a2840','#1a1a1a','#888'], badge:'New',                  type:'Pants',       material:'Cotton',     style:'Classic', img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Pants' },
    { id:'mn11', name:'Comfort Stretch Trench Coat',              price:'$104.00', rating:4.8, colors:['#c4a870','#3a3a3a','#1a2840','#1a1a1a'], badge:'New',               type:'Outerwear',   material:'Polyester',  style:'Classic', img:'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Outerwear' },
    { id:'mn12', name:'Cashmere Scarf',                           price:'$39.90',  rating:4.9, colors:['#888','#1a2840','#c4a870','#f5f0e8','#1a1a1a'], badge:'Best seller', type:'Accessories', material:'Cashmere',   style:'Classic', img:'assets/images/cashmere.avif', subcat:'Accessories' },
    { id:'mn13', name:'Merino Wool Turtleneck',                   price:'$64.90',  rating:4.7, colors:['#1a1a1a','#1a2840','#3a3a3a','#f5f0e8'], badge:'New',              type:'Sweaters',    material:'Merino Wool',style:'Classic', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Sweaters' },
    { id:'mn14', name:'Organic Cotton 5-Pocket Pant',             price:'$54.90',  rating:4.6, colors:['#1a2840','#1a1a1a','#888','#c4a870'], badge:null,                   type:'Pants',       material:'Cotton',     style:'Casual',  img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Pants' },
    { id:'mn15', name:'Linen Overshirt',                          price:'$49.90',  rating:4.7, colors:['#f5f0e8','#98a890','#c4a870','#1a2840'], badge:'New',               type:'T-Shirts',    material:'Linen',      style:'Casual',  img:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'T-Shirts' },
    { id:'mn16', name:'Italian Stretch Blazer',                   price:'$149.00', rating:4.8, colors:['#1a2840','#1a1a1a','#3a3a3a','#c4a870'], badge:'Best seller',       type:'Outerwear',   material:'Wool',       style:'Luxury',  img:'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&auto=format&fit=crop&q=80&crop=top', subcat:'Outerwear' }
  ]
};

/* ----------------------------------------------------------
   3. PAGE STATE
   ---------------------------------------------------------- */
var state = {
  category: 'sweaters',
  subcategory: 'All',
  activeFilters: {},
  sortBy: 'featured',
  wishlist: {},
  page: 1,
  perPage: 12
};

/* ----------------------------------------------------------
   4. HELPERS
   ---------------------------------------------------------- */
function getCategoryParam() {
  var params = new URLSearchParams(window.location.search);
  return (params.get('category') || 'sweaters').toLowerCase().trim();
}

function getRatingStars(rating) {
  var full  = Math.floor(rating);
  var half  = (rating - full) >= 0.5 ? 1 : 0;
  var empty = 5 - full - half;
  var html  = '';
  for (var i = 0; i < full;  i++) html += '<span class="cat-star">\u2605</span>';
  if (half)                        html += '<span class="cat-star" style="opacity:0.45">\u2605</span>';
  for (var j = 0; j < empty; j++) html += '<span class="cat-star empty">\u2605</span>';
  return html;
}

function buildSwatches(colors) {
  var maxVisible = 4;
  var visible = colors.slice(0, maxVisible);
  var extra   = colors.length - maxVisible;
  var html = visible.map(function(c) {
    return '<span class="cat-swatch" style="background:' + c + ';" title="' + c + '"></span>';
  }).join('');
  if (extra > 0) html += '<span class="cat-swatch-more">+' + extra + '</span>';
  return html;
}

/* ----------------------------------------------------------
   5. RENDER BREADCRUMB + TITLE
   ---------------------------------------------------------- */
function renderBreadcrumb() {
  var config = CATEGORY_CONFIG[state.category];
  var el = document.getElementById('catBreadcrumb');
  if (!el || !config) return;
  var parts = config.breadcrumb;
  el.innerHTML = '<a href="index.html">' + parts[0] + '</a>'
    + ' <span class="bc-sep">/</span> '
    + '<span class="bc-current">' + parts[1] + '</span>';
}

function renderTitle() {
  var config = CATEGORY_CONFIG[state.category];
  var el = document.getElementById('catTitle');
  if (el && config) el.textContent = config.title;
}

/* ----------------------------------------------------------
   6. RENDER SUBCATEGORY CIRCLES
   ---------------------------------------------------------- */
function renderSubcats() {
  var config = CATEGORY_CONFIG[state.category];
  var track  = document.getElementById('catCirclesTrack');
  if (!track || !config) return;

  track.innerHTML = config.subcats.map(function(s, i) {
    var isActive = (state.subcategory === s.name);
    return '<button'
      + ' class="cat-circle-item' + (isActive ? ' is-active' : '') + '"'
      + ' data-subcat="' + s.name + '"'
      + ' aria-pressed="' + isActive + '"'
      + ' aria-label="' + s.name + '">'
      + '<div class="cat-circle-img-wrap">'
      + '<img src="' + s.img + '" alt="' + s.name + '" loading="' + (i < 4 ? 'eager' : 'lazy') + '">'
      + '</div>'
      + '<span class="cat-circle-name">' + s.name + '</span>'
      + '</button>';
  }).join('');

  track.querySelectorAll('.cat-circle-item').forEach(function(btn) {
    btn.addEventListener('click', function() {
      state.subcategory = btn.getAttribute('data-subcat');
      state.page = 1;
      renderSubcats();
      renderProducts();
    });
  });
}

/* ----------------------------------------------------------
   7. FILTER + SORT LOGIC
   ---------------------------------------------------------- */
function getFilteredProducts() {
  var all      = PRODUCTS[state.category] || [];
  var filtered = all.slice();

  if (state.subcategory !== 'All') {
    filtered = filtered.filter(function(p) { return p.subcat === state.subcategory; });
  }

  var af = state.activeFilters;
  if (af.type && af.type.length > 0) {
    filtered = filtered.filter(function(p) { return af.type.indexOf(p.type) !== -1; });
  }
  if (af.material && af.material.length > 0) {
    filtered = filtered.filter(function(p) { return af.material.indexOf(p.material) !== -1; });
  }
  if (af.style && af.style.length > 0) {
    filtered = filtered.filter(function(p) { return af.style.indexOf(p.style) !== -1; });
  }

  if (state.sortBy === 'price-asc') {
    filtered.sort(function(a, b) {
      return parseFloat(a.price.replace(/[^0-9.]/g,'')) - parseFloat(b.price.replace(/[^0-9.]/g,''));
    });
  } else if (state.sortBy === 'price-desc') {
    filtered.sort(function(a, b) {
      return parseFloat(b.price.replace(/[^0-9.]/g,'')) - parseFloat(a.price.replace(/[^0-9.]/g,''));
    });
  } else if (state.sortBy === 'rating') {
    filtered.sort(function(a, b) { return b.rating - a.rating; });
  } else if (state.sortBy === 'newest') {
    filtered.sort(function(a, b) {
      return (a.badge === 'New' ? -1 : 1) - (b.badge === 'New' ? -1 : 1);
    });
  }

  return filtered;
}

/* ----------------------------------------------------------
   8. RENDER PRODUCTS
   ---------------------------------------------------------- */
function renderProducts() {
  var grid       = document.getElementById('catProductGrid');
  var countEl    = document.getElementById('catItemCount');
  var loadMoreWrap = document.getElementById('catLoadMoreWrap');
  if (!grid) return;

  var filtered = getFilteredProducts();
  var total    = filtered.length;
  var shown    = filtered.slice(0, state.page * state.perPage);

  if (countEl) countEl.textContent = total + ' items';

  if (total === 0) {
    grid.innerHTML = '<div class="cat-empty">No products match your filters. '
      + '<button onclick="clearAllFilters()" style="color:#e8875a;text-decoration:underline;cursor:pointer;background:none;border:none;font-size:14px;font-family:inherit;">Clear filters</button></div>';
    if (loadMoreWrap) loadMoreWrap.style.display = 'none';
    return;
  }

  grid.innerHTML = shown.map(function(p) {
    var liked = !!state.wishlist[p.id];
    var badge = p.badge
      ? '<span class="cat-badge' + (p.badge === 'Best seller' ? ' cat-badge--bestseller' : '') + '">' + p.badge + '</span>'
      : '';
    return '<article class="cat-product-card" data-id="' + p.id + '">'
      + '<div class="cat-product-img">'
      + '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">'
      + '<button class="cat-heart-btn' + (liked ? ' is-liked' : '') + '" data-id="' + p.id + '" aria-label="' + (liked ? 'Remove from wishlist' : 'Add to wishlist') + '" aria-pressed="' + liked + '">'
      + '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
      + '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'
      + '</svg></button>'
      + badge
      + '</div>'
      + '<div class="cat-product-info">'
      + '<div class="cat-product-name-price">'
      + '<span class="cat-product-name">' + p.name + '</span>'
      + '<span class="cat-product-price">' + p.price + '</span>'
      + '</div>'
      + '<div class="cat-product-rating">'
      + '<div class="cat-stars" aria-label="Rating: ' + p.rating + ' out of 5">' + getRatingStars(p.rating) + '</div>'
      + '<span class="cat-rating-count">' + p.rating.toFixed(1) + '</span>'
      + '</div>'
      + '<div class="cat-swatches" aria-label="Available colors">' + buildSwatches(p.colors) + '</div>'
      + '</div></article>';
  }).join('');

  // Heart button handlers
  grid.querySelectorAll('.cat-heart-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var id = btn.getAttribute('data-id');
      if (state.wishlist[id]) {
        delete state.wishlist[id];
        btn.classList.remove('is-liked');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Add to wishlist');
      } else {
        state.wishlist[id] = true;
        btn.classList.add('is-liked');
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('aria-label', 'Remove from wishlist');
      }
    });
  });

  if (loadMoreWrap) {
    loadMoreWrap.style.display = (shown.length < total) ? 'flex' : 'none';
  }
}

/* ----------------------------------------------------------
   9. FILTER BAR RENDER
   ---------------------------------------------------------- */
var FILTER_OPTIONS_TYPE = {
  sweaters:  ['Cardigans','Pullovers','Turtlenecks','Sleeveless'],
  tops:      ['T-Shirts','Tank Tops','Blouses','Long Sleeve','Crop Tops','Button-Downs'],
  dresses:   ['Midi Dresses','Maxi Dresses','Mini Dresses','Wrap Dresses','Slip Dresses','Knit Dresses'],
  bedding:   ['Sheet Sets','Duvet Covers','Pillowcases','Quilts','Throws'],
  cashmere:  ['Cashmere Sweaters','Cashmere Cardigans','Cashmere Tees','Cashmere Accessories','Cashmere Sets'],
  bags:      ['Tote Bags','Shoulder Bags','Crossbody','Clutches','Backpacks','Belt Bags'],
  pants:     ['Trousers','Wide Leg','Straight Leg','Joggers','Shorts'],
  furniture: ['Sofas','Chairs','Tables','Beds','Storage','Rugs','Lighting'],
  jewelry:   ['Necklaces','Earrings','Bracelets','Rings','Sets'],
  outerwear: ['Trench Coats','Puffer Jackets','Blazers','Wool Coats','Raincoats'],
  shoes:     ['Sneakers','Boots','Loafers','Sandals','Heels','Flats'],
  rugs:      ['Area Rugs','Runner Rugs','Round Rugs','Outdoor Rugs'],
  skirts:    ['Mini Skirts','Midi Skirts','Maxi Skirts','Wrap Skirts','Pleated','Denim Skirts'],
  men:       ['Sweaters','T-Shirts','Pants','Outerwear','Accessories']
};
var FILTER_OPTIONS_MATERIAL = {
  sweaters:  ['Cashmere','Cotton Cashmere','Cotton','Merino Wool','Yak Wool','Alpaca','Linen'],
  tops:      ['Cotton','Cashmere','Linen','Silk','Bamboo','Tencel','Merino Wool'],
  dresses:   ['Cotton Cashmere','Linen','Silk','Cotton','Merino Wool','Tencel','Bamboo'],
  bedding:   ['Bamboo','Linen','Cotton','Cashmere'],
  cashmere:  ['Cashmere'],
  bags:      ['Leather','Suede','Canvas'],
  pants:     ['Wool','Linen','Bamboo','Cotton','Merino Wool'],
  furniture: ['Fabric','Wood','Rattan','Marble','Linen','Wool','Jute','Ceramic','Boucle'],
  jewelry:   ['Gold','Silver','Pearl'],
  outerwear: ['Wool','Merino Wool','Cotton','Linen','Polyester','Nylon','Faux Fur','Down'],
  shoes:     ['Leather','Suede'],
  rugs:      ['Wool','Jute','Cotton','Seagrass','Polypropylene','Recycled PET'],
  skirts:    ['Linen','Cotton','Merino Wool','Wool','Tencel','Bamboo','Cashmere','Polyester','Denim'],
  men:       ['Cashmere','Cotton','Wool','Merino Wool','Linen','Bamboo','Leather','Polyester']
};
var FILTER_OPTIONS_STYLE = ['Classic','Casual','Luxury','Modern'];

function buildPillDropdown(filterId, label, options) {
  var af = state.activeFilters[filterId] || [];
  var active = af.length > 0;
  var optionsHtml = options.map(function(opt) {
    var checked = af.indexOf(opt) !== -1;
    return '<label class="fp-dropdown-option">'
      + '<input type="checkbox" value="' + opt + '" data-filter="' + filterId + '" data-value="' + opt + '"' + (checked ? ' checked' : '') + '>'
      + opt + '</label>';
  }).join('');

  return '<div class="fp-wrapper" data-filter="' + filterId + '">'
    + '<button class="fp' + (active ? ' fp--active' : '') + '" data-toggle="' + filterId + '" aria-expanded="false" aria-haspopup="true">'
    + label
    + '<svg class="fp-caret" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>'
    + '</button>'
    + '<div class="fp-dropdown" id="fp-dd-' + filterId + '">' + optionsHtml + '</div>'
    + '</div>';
}

function buildSortPill() {
  var sortOpts = [
    { value:'featured',  label:'Featured' },
    { value:'newest',    label:'Newest' },
    { value:'price-asc', label:'Price: Low to High' },
    { value:'price-desc',label:'Price: High to Low' },
    { value:'rating',    label:'Top Rated' }
  ];
  var optionsHtml = sortOpts.map(function(o) {
    return '<label class="fp-dropdown-option" style="' + (o.value === state.sortBy ? 'font-weight:600' : '') + '">'
      + '<input type="radio" name="catSort" value="' + o.value + '"' + (o.value === state.sortBy ? ' checked' : '') + ' data-filter="sort">'
      + o.label + '</label>';
  }).join('');

  return '<div class="fp-wrapper" data-filter="sort" style="position:relative">'
    + '<button class="fp" data-toggle="sort" aria-expanded="false" aria-haspopup="true">Sort By'
    + '<svg class="fp-caret" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>'
    + '</button>'
    + '<div class="fp-dropdown fp-dropdown--right" id="fp-dd-sort">' + optionsHtml + '</div>'
    + '</div>';
}

function renderFilterBar() {
  var leftEl  = document.getElementById('catFilterLeft');
  var rightEl = document.getElementById('catFilterRight');
  if (!leftEl || !rightEl) return;

  var typeOpts = FILTER_OPTIONS_TYPE[state.category] || [];
  var matOpts  = FILTER_OPTIONS_MATERIAL[state.category] || [];

  leftEl.innerHTML =
    '<button class="fp" id="filterMainBtn" aria-label="All filters">'
    + '<svg class="fp-icon" viewBox="0 0 24 24" aria-hidden="true">'
    + '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>'
    + '</svg> Filter</button>'
    + (typeOpts.length ? buildPillDropdown('type',     'Product Type', typeOpts)  : '')
    + buildPillDropdown('material', 'Material',     matOpts)
    + buildPillDropdown('style',    'Style',        FILTER_OPTIONS_STYLE);

  rightEl.innerHTML =
    '<span class="cat-item-count" id="catItemCount">0 items</span>'
    + buildSortPill();

  attachFilterListeners();
  // update count after rendering
  var total = getFilteredProducts().length;
  var countEl = document.getElementById('catItemCount');
  if (countEl) countEl.textContent = total + ' items';
}

function attachFilterListeners() {
  // Toggle dropdown open/close
  document.querySelectorAll('[data-toggle]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var key  = btn.getAttribute('data-toggle');
      var dd   = document.getElementById('fp-dd-' + key);
      if (!dd) return;
      var isOpen = dd.classList.contains('is-open');
      document.querySelectorAll('.fp-dropdown.is-open').forEach(function(d) { d.classList.remove('is-open'); });
      document.querySelectorAll('[data-toggle]').forEach(function(b) { b.setAttribute('aria-expanded','false'); });
      if (!isOpen) { dd.classList.add('is-open'); btn.setAttribute('aria-expanded','true'); }
    });
  });

  // Checkbox filter
  document.querySelectorAll('input[type="checkbox"][data-filter]').forEach(function(cb) {
    cb.addEventListener('change', function() {
      var f = cb.getAttribute('data-filter');
      var v = cb.getAttribute('data-value');
      if (!state.activeFilters[f]) state.activeFilters[f] = [];
      var idx = state.activeFilters[f].indexOf(v);
      if (cb.checked && idx === -1) {
        state.activeFilters[f].push(v);
      } else if (!cb.checked && idx !== -1) {
        state.activeFilters[f].splice(idx, 1);
      }
      state.page = 1;
      renderFilterBar();
      renderProducts();
    });
  });

  // Radio sort
  document.querySelectorAll('input[type="radio"][data-filter="sort"]').forEach(function(rb) {
    rb.addEventListener('change', function() {
      if (rb.checked) {
        state.sortBy = rb.value;
        state.page   = 1;
        document.querySelectorAll('.fp-dropdown.is-open').forEach(function(d) { d.classList.remove('is-open'); });
        renderFilterBar();
        renderProducts();
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', function() {
    document.querySelectorAll('.fp-dropdown.is-open').forEach(function(d) { d.classList.remove('is-open'); });
    document.querySelectorAll('[data-toggle]').forEach(function(b) { b.setAttribute('aria-expanded','false'); });
  });
}

function clearAllFilters() {
  state.activeFilters = {};
  state.subcategory   = 'All';
  state.page          = 1;
  renderSubcats();
  renderFilterBar();
  renderProducts();
}

/* ----------------------------------------------------------
   10. SCROLL ARROW + LOAD MORE
   ---------------------------------------------------------- */
function setupCirclesArrow() {
  var arrow = document.getElementById('catCirclesArrow');
  var track = document.getElementById('catCirclesTrack');
  if (!arrow || !track) return;
  arrow.addEventListener('click', function() {
    track.scrollBy({ left: 280, behavior: 'smooth' });
  });
}

function setupLoadMore() {
  var btn = document.getElementById('catLoadMoreBtn');
  if (!btn) return;
  btn.addEventListener('click', function() {
    state.page += 1;
    renderProducts();
  });
}

/* ----------------------------------------------------------
   11. INIT
   ---------------------------------------------------------- */
function init() {
  state.category = getCategoryParam();
  if (!CATEGORY_CONFIG[state.category]) state.category = 'sweaters';

  // Add right-align style for sort dropdown
  var s = document.createElement('style');
  s.textContent = '.fp-dropdown--right{left:auto;right:0;}';
  document.head.appendChild(s);

  renderBreadcrumb();
  renderTitle();
  renderSubcats();
  renderFilterBar();
  renderProducts();
  setupCirclesArrow();
  setupLoadMore();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ============================================================
   FILTER DRAWER MODULE
   Attached after init() so all shared state/functions exist.
   ============================================================ */

(function() {
  'use strict';

  /* ----------------------------------------------------------
     DRAWER FILTER STATE
     Mirrors / extends the shared `state` object from above.
     drawerState holds selections made inside the drawer that
     are only committed to `state` when the user clicks Apply
     (or immediately, since we apply on close for smooth UX).
  ---------------------------------------------------------- */
  var drawerState = {
    sort:     'sort',      // one of SORT_OPTIONS values
    colors:   [],
    sizes:    [],
    price:    '',
    garment:  []
  };

  /* colour reference data */
  var COLOR_DEFS = [
    { name: 'Beige',      hex: '#d4c8b8' },
    { name: 'Black',      hex: '#1a1a1a' },
    { name: 'Blue',       hex: '#1a2840' },
    { name: 'Bronze',     hex: '#b08030' },
    { name: 'Green',      hex: '#2a5030' },
    { name: 'Multicolor', hex: 'linear-gradient(135deg,#e74c3c 0%,#f1c40f 33%,#2ecc71 66%,#3498db 100%)' },
    { name: 'Pink',       hex: '#e8b8b0' },
    { name: 'Rose Gold',  hex: '#c4a0a0' }
  ];

  /* colour approximate matching */
  var COLOR_HEX_GROUPS = {
    'Beige':   ['#d4c8b8','#c4a870','#e8dfd0','#f5f0e8','#e8c8b8'],
    'Black':   ['#1a1a1a','#3a3a3a'],
    'Blue':    ['#1a2840','#2a5040'],
    'Bronze':  ['#b08030','#c09060','#c4a870'],
    'Green':   ['#2a5030','#4a6040','#98a890'],
    'Pink':    ['#e8b8b0','#6a1a30','#8a2020'],
    'Rose Gold':['#c4a0a0','#d4a0a0'],
    'White':   ['#f5f0e8','#e8dfd0'],
    'Grey':    ['#888','#888888','#aaa'],
    'Brown':   ['#6a4030','#8a4a30','#c4a870'],
    'Red':     ['#8a2020','#6a1a30']
  };

  var SORT_OPTIONS = [
    { value: 'sort',        label: 'Sort' },
    { value: 'featured',    label: 'Featured' },
    { value: 'relevant',    label: 'Most Relevant' },
    { value: 'best-seller', label: 'Best Selling' },
    { value: 'alpha-az',    label: 'Alphabetically, A\u2013Z' },
    { value: 'alpha-za',    label: 'Alphabetically, Z\u2013A' },
    { value: 'price-asc',   label: 'Price, Low to High' },
    { value: 'price-desc',  label: 'Price, High to Low' },
    { value: 'date-old',    label: 'Date, Old to New' },
    { value: 'date-new',    label: 'Date, New to Old' }
  ];

  /* map drawer sort values → state.sortBy values used by getFilteredProducts */
  var SORT_MAP = {
    'sort':        'featured',
    'featured':    'featured',
    'relevant':    'featured',
    'best-seller': 'featured',
    'alpha-az':    'alpha-az',
    'alpha-za':    'alpha-za',
    'price-asc':   'price-asc',
    'price-desc':  'price-desc',
    'date-old':    'oldest',
    'date-new':    'newest'
  };

  var SIZE_OPTIONS = ['Extra Small (XS)', 'Small (S)', 'Medium (M)', 'Large (L)', 'Extra Large (XL)', 'XXL'];

  var PRICE_OPTIONS = [
    { value: 'under-50',   label: 'Under $50' },
    { value: '50-100',     label: '$50 \u2013 $100' },
    { value: '100-150',    label: '$100 \u2013 $150' },
    { value: '150-200',    label: '$150 \u2013 $200' },
    { value: 'over-200',   label: '$200+' }
  ];

  var AVAIL_OPTIONS = ['In Stock','Out of Stock'];

  /* ----------------------------------------------------------
     BUILD & INJECT DRAWER DOM (runs once on init)
  ---------------------------------------------------------- */
  var overlay, panel;

  function buildDrawerHTML() {
    return [
      '<div class="fdr-overlay" id="fdrOverlay" aria-hidden="true"></div>',
      '<aside class="fdr-panel" id="fdrPanel" role="dialog" aria-modal="true" aria-label="Filter products">',
        '<div class="fdr-header">',
          '<h2 class="fdr-title">Filter</h2>',
          '<button class="fdr-close" id="fdrClose" aria-label="Close filter panel">',
            '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
          '</button>',
        '</div>',
        '<div class="fdr-body" id="fdrBody">',
          buildSection('sort',         'Sort',          buildSortContent()),
          buildSection('color',        'Color',         buildColorContent()),
          buildSection('characteristics','Characteristics', buildCharContent()),
          buildSection('size',         'Size',          buildSizeContent()),
          buildSection('materials',    'Materials',     buildMaterialContent()),
          buildSection('availability', 'Availability',  buildAvailContent()),
          buildSection('price',        'Price',         buildPriceContent()),
          buildSection('garment',      'Garment Type',  buildGarmentContent()),
        '</div>',
        '<div class="fdr-footer">',
          '<button class="fdr-clear-btn" id="fdrClearBtn" type="button">Clear All</button>',
          '<button class="fdr-apply-btn" id="fdrApplyBtn" type="button">Apply Filters</button>',
        '</div>',
      '</aside>'
    ].join('');
  }

  function buildSection(id, label, content) {
    /* Sort starts open; others start closed */
    var open = (id === 'sort');
    return [
      '<div class="fdr-section' + (open ? ' is-open' : '') + '" data-section="' + id + '">',
        '<button class="fdr-section-head" type="button" aria-expanded="' + (open ? 'true' : 'false') + '">',
          '<span class="fdr-section-label">' + label + '</span>',
          '<svg class="fdr-section-arrow" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>',
        '</button>',
        '<div class="fdr-section-body">',
          content,
        '</div>',
      '</div>'
    ].join('');
  }

  function buildSortContent() {
    return '<div class="fdr-options">'
      + SORT_OPTIONS.map(function(o) {
          var sel = (drawerState.sort === o.value) || (drawerState.sort === '' && o.value === 'sort');
          return '<button class="fdr-opt-btn' + (sel ? ' is-selected' : '') + '" data-sort="' + o.value + '" type="button">'
            + o.label + '</button>';
        }).join('')
      + '</div>';
  }

  function buildColorContent() {
    return '<div class="fdr-colors">'
      + COLOR_DEFS.map(function(c) {
          var sel = drawerState.colors.indexOf(c.name) !== -1;
          var swatchStyle = c.hex.indexOf('gradient') !== -1
            ? 'background:' + c.hex + ';'
            : 'background:' + c.hex + ';';
          return '<button class="fdr-color-btn' + (sel ? ' is-selected' : '') + '" data-color="' + c.name + '" type="button">'
            + '<span class="fdr-color-swatch" style="' + swatchStyle + '"></span>'
            + c.name.toUpperCase()
            + '</button>';
        }).join('')
      + '</div>';
  }

  function buildCharContent() {
    var chars = getCharacteristicsForCategory();
    return '<div class="fdr-options">'
      + chars.map(function(c) {
          var sel = drawerState.garment.indexOf('char:' + c.name) !== -1;
          return '<button class="fdr-opt-btn' + (sel ? ' is-selected' : '') + '" data-char="' + c.name + '" type="button">'
            + c.name.toUpperCase() + ' (' + c.count + ')' + '</button>';
        }).join('')
      + '</div>';
  }

  function buildSizeContent() {
    return '<div class="fdr-sizes">'
      + SIZE_OPTIONS.map(function(s) {
          var sel = drawerState.sizes.indexOf(s) !== -1;
          return '<button class="fdr-size-btn' + (sel ? ' is-selected' : '') + '" data-sz="' + s + '" type="button">' + s + '</button>';
        }).join('')
      + '</div>';
  }

  function buildMaterialContent() {
    var mats = FILTER_OPTIONS_MATERIAL[state.category] || [];
    return '<div class="fdr-options">'
      + mats.map(function(m) {
          var sel = (state.activeFilters.material || []).indexOf(m) !== -1;
          return '<button class="fdr-opt-btn' + (sel ? ' is-selected' : '') + '" data-mat="' + m + '" type="button">'
            + m + '</button>';
        }).join('')
      + '</div>';
  }

  function buildAvailContent() {
    return '<div class="fdr-options">'
      + AVAIL_OPTIONS.map(function(a) {
          var sel = (state.activeFilters.availability || []).indexOf(a) !== -1;
          return '<button class="fdr-opt-btn' + (sel ? ' is-selected' : '') + '" data-avail="' + a + '" type="button">'
            + a + '</button>';
        }).join('')
      + '</div>';
  }

  function buildPriceContent() {
    return '<div class="fdr-options">'
      + PRICE_OPTIONS.map(function(p) {
          var sel = drawerState.price === p.value;
          return '<button class="fdr-opt-btn' + (sel ? ' is-selected' : '') + '" data-price="' + p.value + '" type="button">'
            + p.label + '</button>';
        }).join('')
      + '</div>';
  }

  function buildGarmentContent() {
    var types = FILTER_OPTIONS_TYPE[state.category] || [];
    return '<div class="fdr-options">'
      + types.map(function(t) {
          var sel = (state.activeFilters.type || []).indexOf(t) !== -1;
          return '<button class="fdr-opt-btn' + (sel ? ' is-selected' : '') + '" data-garment="' + t + '" type="button">'
            + t + '</button>';
        }).join('')
      + '</div>';
  }

  function getCharacteristicsForCategory() {
    var all = PRODUCTS[state.category] || [];
    var cats = { 'Boat': 0, 'Round': 0, 'Square': 0, 'V-Neck': 0, 'Crewneck': 0, 'Turtleneck': 0 };
    all.forEach(function(p) {
      var n = p.name.toLowerCase();
      if (n.indexOf('v-neck') !== -1 || n.indexOf('v neck') !== -1) cats['V-Neck']++;
      if (n.indexOf('crew') !== -1) cats['Crewneck']++;
      if (n.indexOf('turtleneck') !== -1) cats['Turtleneck']++;
      if (n.indexOf('boat') !== -1) cats['Boat']++;
      if (n.indexOf('round') !== -1) cats['Round']++;
    });
    return Object.keys(cats).filter(function(k) { return cats[k] > 0; }).map(function(k) {
      return { name: k, count: cats[k] };
    });
  }

  /* ----------------------------------------------------------
     INJECT DRAWER INTO DOM
  ---------------------------------------------------------- */
  function injectDrawer() {
    var el = document.createElement('div');
    el.innerHTML = buildDrawerHTML();
    while (el.firstChild) { document.body.appendChild(el.firstChild); }
    overlay = document.getElementById('fdrOverlay');
    panel   = document.getElementById('fdrPanel');
  }

  /* ----------------------------------------------------------
     OPEN / CLOSE
  ---------------------------------------------------------- */
  function openDrawer() {
    refreshDrawerContent();
    panel.classList.add('is-open');
    overlay.classList.add('is-visible');
    document.body.classList.add('fdr-open');
    panel.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    panel.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.classList.remove('fdr-open');
    panel.setAttribute('aria-hidden', 'true');
  }

  /* re-render drawer body while keeping accordion states */
  function refreshDrawerContent() {
    var body = document.getElementById('fdrBody');
    if (!body) return;
    /* remember which sections are open */
    var openSections = {};
    body.querySelectorAll('.fdr-section').forEach(function(s) {
      if (s.classList.contains('is-open')) openSections[s.getAttribute('data-section')] = true;
    });
    /* rebuild */
    var sections = [
      { id: 'sort',           label: 'Sort',            content: buildSortContent() },
      { id: 'color',          label: 'Color',           content: buildColorContent() },
      { id: 'characteristics',label: 'Characteristics', content: buildCharContent() },
      { id: 'size',           label: 'Size',            content: buildSizeContent() },
      { id: 'materials',      label: 'Materials',       content: buildMaterialContent() },
      { id: 'availability',   label: 'Availability',    content: buildAvailContent() },
      { id: 'price',          label: 'Price',           content: buildPriceContent() },
      { id: 'garment',        label: 'Garment Type',    content: buildGarmentContent() }
    ];
    body.innerHTML = sections.map(function(s) {
      var open = openSections.hasOwnProperty(s.id) ? openSections[s.id] : (s.id === 'sort');
      var html = [
        '<div class="fdr-section' + (open ? ' is-open' : '') + '" data-section="' + s.id + '">',
          '<button class="fdr-section-head" type="button" aria-expanded="' + (open ? 'true' : 'false') + '">',
            '<span class="fdr-section-label">' + s.label + '</span>',
            '<svg class="fdr-section-arrow" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>',
          '</button>',
          '<div class="fdr-section-body">',
            s.content,
          '</div>',
        '</div>'
      ].join('');
      return html;
    }).join('');
    attachDrawerListeners();
  }

  /* ----------------------------------------------------------
     EVENT LISTENERS
  ---------------------------------------------------------- */
  function attachDrawerListeners() {
    var body = document.getElementById('fdrBody');
    if (!body) return;

    /* --- Accordion --- */
    body.querySelectorAll('.fdr-section-head').forEach(function(head) {
      head.addEventListener('click', function() {
        var sec = head.closest('.fdr-section');
        var isOpen = sec.classList.contains('is-open');
        sec.classList.toggle('is-open', !isOpen);
        head.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });
    });

    /* --- Sort --- */
    body.querySelectorAll('[data-sort]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        drawerState.sort = btn.getAttribute('data-sort');
        body.querySelectorAll('[data-sort]').forEach(function(b) { b.classList.remove('is-selected'); });
        btn.classList.add('is-selected');
        /* apply immediately */
        applyDrawerFilters(false);
      });
    });

    /* --- Colors --- */
    body.querySelectorAll('[data-color]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var c = btn.getAttribute('data-color');
        var idx = drawerState.colors.indexOf(c);
        if (idx !== -1) { drawerState.colors.splice(idx, 1); btn.classList.remove('is-selected'); }
        else            { drawerState.colors.push(c);        btn.classList.add('is-selected'); }
        applyDrawerFilters(false);
      });
    });

    /* --- Characteristics --- */
    body.querySelectorAll('[data-char]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var c = 'char:' + btn.getAttribute('data-char');
        var idx = drawerState.garment.indexOf(c);
        if (idx !== -1) { drawerState.garment.splice(idx, 1); btn.classList.remove('is-selected'); }
        else            { drawerState.garment.push(c);        btn.classList.add('is-selected'); }
        applyDrawerFilters(false);
      });
    });

    /* --- Sizes --- */
    body.querySelectorAll('[data-sz]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var s = btn.getAttribute('data-sz');
        var idx = drawerState.sizes.indexOf(s);
        if (idx !== -1) { drawerState.sizes.splice(idx, 1); btn.classList.remove('is-selected'); }
        else            { drawerState.sizes.push(s);        btn.classList.add('is-selected'); }
        applyDrawerFilters(false);
      });
    });

    /* --- Materials --- */
    body.querySelectorAll('[data-mat]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var m = btn.getAttribute('data-mat');
        if (!state.activeFilters.material) state.activeFilters.material = [];
        var idx = state.activeFilters.material.indexOf(m);
        if (idx !== -1) { state.activeFilters.material.splice(idx, 1); btn.classList.remove('is-selected'); }
        else            { state.activeFilters.material.push(m);        btn.classList.add('is-selected'); }
        applyDrawerFilters(false);
      });
    });

    /* --- Availability --- */
    body.querySelectorAll('[data-avail]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var a = btn.getAttribute('data-avail');
        if (!state.activeFilters.availability) state.activeFilters.availability = [];
        var idx = state.activeFilters.availability.indexOf(a);
        if (idx !== -1) { state.activeFilters.availability.splice(idx, 1); btn.classList.remove('is-selected'); }
        else            { state.activeFilters.availability.push(a);        btn.classList.add('is-selected'); }
        applyDrawerFilters(false);
      });
    });

    /* --- Price --- */
    body.querySelectorAll('[data-price]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var p = btn.getAttribute('data-price');
        if (drawerState.price === p) { drawerState.price = ''; btn.classList.remove('is-selected'); }
        else {
          body.querySelectorAll('[data-price]').forEach(function(b) { b.classList.remove('is-selected'); });
          drawerState.price = p;
          btn.classList.add('is-selected');
        }
        applyDrawerFilters(false);
      });
    });

    /* --- Garment Type --- */
    body.querySelectorAll('[data-garment]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var t = btn.getAttribute('data-garment');
        if (!state.activeFilters.type) state.activeFilters.type = [];
        var idx = state.activeFilters.type.indexOf(t);
        if (idx !== -1) { state.activeFilters.type.splice(idx, 1); btn.classList.remove('is-selected'); }
        else            { state.activeFilters.type.push(t);        btn.classList.add('is-selected'); }
        applyDrawerFilters(false);
      });
    });
  }

  /* ----------------------------------------------------------
     APPLY DRAWER FILTERS TO PRODUCT GRID
  ---------------------------------------------------------- */
  function applyDrawerFilters(closeAfter) {
    /* --- Sort --- */
    var sv = drawerState.sort || 'featured';
    /* extend getFilteredProducts sort support */
    if (sv === 'alpha-az' || sv === 'alpha-za' || sv === 'date-old' || sv === 'oldest') {
      state.sortBy = sv;
    } else {
      state.sortBy = SORT_MAP[sv] || 'featured';
    }

    /* --- Color filter (map color names → hex values) --- */
    if (drawerState.colors.length > 0) {
      var hexList = [];
      drawerState.colors.forEach(function(cName) {
        var hexGroup = COLOR_HEX_GROUPS[cName] || [];
        hexGroup.forEach(function(h) { if (hexList.indexOf(h) === -1) hexList.push(h); });
      });
      state.activeFilters.drawerColor = hexList;
    } else {
      delete state.activeFilters.drawerColor;
    }

    /* --- Price filter --- */
    if (drawerState.price) {
      state.activeFilters.drawerPrice = drawerState.price;
    } else {
      delete state.activeFilters.drawerPrice;
    }

    state.page = 1;
    renderProducts();
    renderFilterBar();

    if (closeAfter) closeDrawer();
  }

  /* ----------------------------------------------------------
     EXTEND getFilteredProducts to handle drawer-specific filters
     We monkey-patch the sort logic without touching original code.
  ---------------------------------------------------------- */
  var _origGetFilteredProducts = getFilteredProducts;
  getFilteredProducts = function() {
    var filtered = _origGetFilteredProducts();

    /* extra sort modes added by drawer */
    if (state.sortBy === 'alpha-az') {
      filtered.sort(function(a, b) { return a.name.localeCompare(b.name); });
    } else if (state.sortBy === 'alpha-za') {
      filtered.sort(function(a, b) { return b.name.localeCompare(a.name); });
    } else if (state.sortBy === 'oldest') {
      /* treat products with badge "New" as newest, rest as older */
      filtered.sort(function(a, b) {
        return (a.badge === 'New' ? 1 : -1) - (b.badge === 'New' ? 1 : -1);
      });
    }

    /* color filter */
    var dc = state.activeFilters.drawerColor;
    if (dc && dc.length > 0) {
      filtered = filtered.filter(function(p) {
        return p.colors.some(function(h) { return dc.indexOf(h) !== -1; });
      });
    }

    /* price filter */
    var dp = state.activeFilters.drawerPrice;
    if (dp) {
      filtered = filtered.filter(function(p) {
        var val = parseFloat(p.price.replace(/[^0-9.]/g, ''));
        if (dp === 'under-50')  return val < 50;
        if (dp === '50-100')    return val >= 50  && val <= 100;
        if (dp === '100-150')   return val > 100  && val <= 150;
        if (dp === '150-200')   return val > 150  && val <= 200;
        if (dp === 'over-200')  return val > 200;
        return true;
      });
    }

    return filtered;
  };

  /* ----------------------------------------------------------
     CLEAR ALL
  ---------------------------------------------------------- */
  function clearDrawerFilters() {
    drawerState.sort   = 'sort';
    drawerState.colors = [];
    drawerState.sizes  = [];
    drawerState.price  = '';
    drawerState.garment = [];
    /* clear shared state filters as well */
    state.activeFilters = {};
    state.sortBy        = 'featured';
    state.page          = 1;
    refreshDrawerContent();
    renderProducts();
    renderFilterBar();
    renderSubcats();
  }

  /* ----------------------------------------------------------
     HOOK INTO EXISTING FILTER BUTTON
     renderFilterBar() recreates #filterMainBtn each call, so
     we use event delegation on the stable #catFilterLeft parent.
  ---------------------------------------------------------- */
  function hookFilterButton() {
    var leftEl = document.getElementById('catFilterLeft');
    if (!leftEl) return;
    leftEl.addEventListener('click', function(e) {
      var btn = e.target.closest('#filterMainBtn');
      if (btn) {
        e.stopPropagation();
        openDrawer();
      }
    });
  }

  /* ----------------------------------------------------------
     STATIC EVENT LISTENERS (outside drawer body, set once)
  ---------------------------------------------------------- */
  function setupStaticListeners() {
    /* Close button */
    document.addEventListener('click', function(e) {
      if (e.target.closest('#fdrClose')) { closeDrawer(); }
    });

    /* Overlay click */
    document.addEventListener('click', function(e) {
      if (e.target === overlay) { closeDrawer(); }
    });

    /* Apply button */
    document.addEventListener('click', function(e) {
      if (e.target.closest('#fdrApplyBtn')) { applyDrawerFilters(true); }
    });

    /* Clear button */
    document.addEventListener('click', function(e) {
      if (e.target.closest('#fdrClearBtn')) { clearDrawerFilters(); }
    });

    /* ESC key */
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && panel && panel.classList.contains('is-open')) { closeDrawer(); }
    });
  }

  /* ----------------------------------------------------------
     INIT DRAWER
  ---------------------------------------------------------- */
  function initDrawer() {
    injectDrawer();
    setupStaticListeners();
    hookFilterButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDrawer);
  } else {
    initDrawer();
  }

})();

