/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSurveyData = /* GraphQL */ `
  mutation CreateSurveyData(
    $input: CreateSurveyDataInput!
    $condition: ModelSurveyDataConditionInput
  ) {
    createSurveyData(input: $input, condition: $condition) {
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
export const updateSurveyData = /* GraphQL */ `
  mutation UpdateSurveyData(
    $input: UpdateSurveyDataInput!
    $condition: ModelSurveyDataConditionInput
  ) {
    updateSurveyData(input: $input, condition: $condition) {
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
export const deleteSurveyData = /* GraphQL */ `
  mutation DeleteSurveyData(
    $input: DeleteSurveyDataInput!
    $condition: ModelSurveyDataConditionInput
  ) {
    deleteSurveyData(input: $input, condition: $condition) {
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
