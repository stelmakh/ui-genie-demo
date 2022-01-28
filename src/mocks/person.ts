import {JSONSchema} from 'ui-genie'

export const personSchema: JSONSchema = {
    $id: "https://example.com/person.schema.json",
    $schema: "https://json-schema.org/draft/2020-12/schema",
    title: "Person",
    type: "object",
    properties: {
        firstName: {
        type: "string",
        description: "The person's first name."
        },
        lastName: {
        type: "string",
        description: "The person's last name."
        },
        age: {
        description: "Age in years which must be equal to or greater than zero.",
        type: "integer",
        minimum: 0
        }
    }
}
export const personsCollectionSchema: JSONSchema = {
    $id: "https://example.com/persons.schema.json",
    $schema: "https://json-schema.org/draft/2020-12/schema",
    title: "Persons Collection",
    type: "array",
    items: {
        type: "object",
        properties: {
            firstName: {
                type: "string",
                description: "The person's first name."
            },
            lastName: {
                type: "string",
                description: "The person's last name."
            },
            age: {
                description: "Age in years which must be equal to or greater than zero.",
                type: "integer",
                minimum: 0
            }
        }
    }
};

export const johnDoe = {
    firstName: "John",
    lastName: "Doe",
    age: 21
}

export const multiplePersons = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 21
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 18
    },
]
