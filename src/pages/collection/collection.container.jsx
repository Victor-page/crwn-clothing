import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ({
  match: {
    params: { collectionId },
  },
}) => (
  <Query query={GET_COLLECTION_BY_TITLE} variables={{ title: collectionId }}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      if (error) {
        console.log(error);
        return (
          <p>
            Error
            <span role="img" aria-label="Sad smile">
              🙁
            </span>
          </p>
        );
      }
      if (!data) return <p>Not found</p>;

      const { getCollectionsByTitle } = data;

      return <CollectionPage collection={getCollectionsByTitle} />;
    }}
  </Query>
);

export default CollectionPageContainer;