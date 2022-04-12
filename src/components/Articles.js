import React from 'react'
import './Articles.css'
import articles from './constants/articles'
const Articles = () => {
  return (
        <div className='article_section' id='articles'>
            <div className='section'>
            <h3>LES</h3><br/>
            <h1>ARTICLES</h1><br/>
            </div>
            <div className='articles_container'>
                    {
                        articles.map((arts) => {
                            return <div className='articles_grid_container' key={arts.id}>
                                    <h6>{arts.title}</h6><br/>
                                    <div className='date'>
                                    <small>{arts.date}</small><br/>
                                    <small className='immobile'>{arts.immobilier}</small><br/>
                                    </div>
                                    <div className='articles_contents'>
                                        <small>{arts.content}</small>
                                    </div>
                                </div>
                        })
                        
                    }
            </div>
        </div>
  )
}

export default Articles