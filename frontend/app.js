/* eslint-disable no-unused-vars */
import babel from 'babel/polyfill'
import dom4 from 'dom4'
/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-fetch'

document.query('#reload')
  .addEventListener('click', async event => {
    const response = await fetch('./friends')
    const friends = await response.json()
    for (const {id, name} of friends) {
      const listItem = document.createElement('li')
      listItem.textContent = name
      listItem.dataset.id = id
      document.query('#friends')
        .appendChild(listItem)
    }
  })
