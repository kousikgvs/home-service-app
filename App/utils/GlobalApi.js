import { request, gql } from 'graphql-request'

const MASTER_URL= "https://api-ap-south-1.hygraph.com/v2/cls0c576w29hp01tem3a7nla9/master"

const getSlider = async () => {
    const document = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }      
`
const result = await request( MASTER_URL , document)
return result
}

const getCategeories = async () => {
    const document = gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }   
`
const result = await request( MASTER_URL , document)
return result
}


const getBusinessLists = async () => {
  const document = gql`
  query getBusinessLists {
    businessLists {
      name
      email
      contactPerson
      address
      category {
        name
      }
      images {
        url
      }
      about
    }
  } 
`
const result = await request( MASTER_URL , document)
return result
}

export default {getSlider, getCategeories , getBusinessLists}