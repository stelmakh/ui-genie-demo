import {JSONSchema} from 'ui-genie'

export const personSchema: JSONSchema = {
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
        lastName: "Smith",
        age: 18
    },
]
