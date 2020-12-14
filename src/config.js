const config = {
  backend: {
    name: "github",
    repo: "gmaclennan/mapeo-default-config-test",
    branch: "master",
    use_graphql: true,
  },
  load_config_file: false,
  media_folder: "icons",
  collections: [
    {
      label: "Categories",
      label_singular: "Category",
      name: "presets",
      folder: "presets",
      identifier_field: "name",
      extension: "json",
      create: true,
      editor: { preview: false },
      fields: [
        {
          label: "Name",
          name: "name",
          widget: "string",
          required: true,
          hint: "Name of this category in the default language",
        },
        {
          label: "Icon",
          name: "icon",
          widget: "icon",
          required: true,
          hint:
            "If you upload a new image, it must be an SVG and the filename must end in `-100px.svg` (don't ask why, sorry about this!)",
        },
        {
          label: "Geometry",
          name: "geometry",
          widget: "select",
          multiple: true,
          options: ["point", "line", "area"],
          default: ["point"],
          required: true,
          hint:
            "For the map editor, select what type of features this category should apply to.",
        },
        {
          label: "Questions",
          label_singular: "Question",
          name: "fields",
          widget: "custom-list",
          collapsed: false,
          minimize_collapsed: false,
          options_length: 40,
          field: {
            label: "Question",
            name: "field",
            widget: "relation",
            collection: "fields",
            search_fields: ["label"],
            value_field: "{{slug}}",
            display_fields: ["label"],
          },
        },
        {
          label: "Search terms",
          name: "terms",
          widget: "list",
          hint:
            "Comma-separated list of words that the user might use to search for this category",
        },
        {
          label: "Sort order",
          name: "sort",
          widget: "number",
          value_type: "int",
          min: 0,
          hint:
            "Higher numbers will be sorted last in the list displayed in Mapeo Mobile",
        },
      ],
    },
    {
      label: "Questions",
      label_singular: "Question",
      name: "fields",
      folder: "fields",
      identifier_field: "key",
      summary: "{{label}} ({{type}})",
      extension: "json",
      create: true,
      editor: { preview: false },
      fields: [
        {
          label: "Question label",
          name: "label",
          widget: "string",
          required: true,
        },
        {
          label: "Helper text",
          name: "helperText",
          widget: "string",
          hint: "Additional helper text, displayed below the question label",
        },
        {
          label: "Placeholder",
          name: "placeholder",
          widget: "string",
          hint: "Displayed in an empty field as a hint for the user to fill in",
        },
        {
          label: "Field key",
          name: "key",
          widget: "string",
          required: true,
          hint:
            "The internal field key that the answer to this question will be stored under",
        },
        {
          label: "Question type",
          name: "type",
          widget: "select",
          required: true,
          options: [
            { label: "Text", value: "text" },
            { label: "Localizable text", value: "localized" },
            { label: "Select One", value: "select_one" },
            { label: "Select Multiple", value: "select_multiple" },
          ],
        },
        {
          label: "Select options",
          name: "options",
          widget: "list",
          hint: "If a select field, add options here",
          collapsed: false,
          fields: [
            {
              label: "Label",
              name: "label",
              widget: "string",
              hint: "The label shown to the user for this select option",
            },
            {
              label: "Value",
              name: "value",
              widget: "string",
              hint:
                "The value stored in the database if this option is selected",
            },
          ],
        },
      ],
    },
    {
      label: "Configuration",
      name: "config",
      editor: { preview: false },
      files: [
        {
          label: "Project metadata",
          name: "metadata",
          file: "metadata.json",
          fields: [
            {
              label: "Project Key",
              name: "projectKey",
              widget: "string",
              hint:
                "A 32 byte (256-bit) random number encoded as a hex string (numbers 0-9 and lowercase letters a-f)",
              pattern: [
                "^[0-9a-f]{64}$",
                "Must be 64 characters, numbers 0-9 and lowercase letters a-f",
              ],
            },
            {
              label: "Project Name",
              name: "name",
              widget: "string",
              hint:
                "A human-readable name for this project (may include spaces and accents)",
            },
          ],
        },
      ],
    },
  ],
};

export default config;
