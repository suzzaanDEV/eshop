// PromotionsPage.js

import React from 'react';

const PromotionsPage = () => {
    // Example array of promotions (replace with your actual data)
    const promotions = [
        {
            id: 1,
            title: 'Summer Sale!',
            description: 'Up to 50% off on selected items',
            imageUrl: 'https://t3.ftcdn.net/jpg/02/95/65/00/360_F_295650090_kEtvXGeZtWWBf28gNUmZkzFWCkiODSOo.jpg',
            linkUrl: '/shop/summer-sale'
        },
        {
            id: 2,
            title: 'New Arrivals',
            description: 'Discover the latest trends for this season',
            imageUrl: 'https://t3.ftcdn.net/jpg/02/95/65/00/360_F_295650090_kEtvXGeZtWWBf28gNUmZkzFWCkiODSOo.jpg',
            linkUrl: '/shop/new-arrivals'
        },
        {
            id: 3,
            title: 'Limited Time Offer',
            description: 'Don’t miss out! Shop now before it’s gone',
            imageUrl: 'https://t3.ftcdn.net/jpg/02/95/65/00/360_F_295650090_kEtvXGeZtWWBf28gNUmZkzFWCkiODSOo.jpg',
            linkUrl: '/shop/limited-offer'
        }
        // Add more promotional items as needed
    ];

    return (
        <div className="promotions-page">
            <div className="container">
                <h2 className="text-center mb-5">Promotions</h2>
                <div className="row">
                    {promotions.map(promotion => (
                        <div className="col-md-4 mb-4" key={promotion.id}>
                            <div className="card">
                                <img src={promotion.imageUrl} className="card-img-top" alt={promotion.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{promotion.title}</h5>
                                    <p className="card-text">{promotion.description}</p>
                                    <a href={promotion.linkUrl} className="btn btn-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromotionsPage;
