/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSurveyData = /* GraphQL */ `
  query GetSurveyData($id: ID!) {
    getSurveyData(id: $id) {
      id
      title
      description
      filePath
      like
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listSurveyDatas = /* GraphQL */ `
  query ListSurveyDatas(
    $filter: ModelSurveyDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        filePath
        like
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
