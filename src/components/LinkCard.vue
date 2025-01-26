<template>
    <v-card max-width="600" class="mx-auto my-4 elevation-3">
      <v-card-title>
        <v-icon left color="primary">mdi-link</v-icon>
        Links
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="blue">mdi-twitter</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <a href="https://twitter.com/Lonnet_Official" target="_blank" rel="noopener noreferrer">
                @Lonnet_Official
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="green">mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <a href="mailto:kirasamelonnet@gmail.com">
                kirasamelonnet@gmail.com
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="grey">mdi-apple</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              macOS, iOS
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'LinkCard'
  };
  </script>
  
  <style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
  
  a:hover {
    color: var(--v-primary-base);
  }
  </style>
  