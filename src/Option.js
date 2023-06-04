 import TitleIcon from '@mui/icons-material/Title';
 import ZoomInIcon from '@mui/icons-material/ZoomIn';
 import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
 import TimelineIcon from '@mui/icons-material/Timeline';
 import PieChartIcon from '@mui/icons-material/PieChart';


 const option = {
    
        "schema": { 
          "title":{
            "type": "String",
            "label": "Title",
            "required": true,
            "default": "Title",
            "description": "Title component",
            "icon":TitleIcon
        },
          "legend": {
            "type": "object",
            "label": "Legend",
            "description":"Legend component shows name of different series",
            "schema": {
               "type": {
                  "type":"string",
                  "label":"Type",
                  "default":"plain",
                  "multiple" : false,
                  "possibles":[
                    {"label":"plain", "value":"plain"},
                    {"label":"scroll", "value":"scroll"}
                  ]
    
                },
               "show": {
                  "type": "boolean",
                  "label": "Show",
                  "default": true
              },
              "data":{
                "type": "array",
                "label": "Data",
                "default":[],
               // data de legend se genere a partir des data regrouper 
              },
              "orient": {
                "type": "string",
                "label":"Orientation",
                "default":"horizontal",
                "multiple":false,
                "possibles":[
                    {"label":"horizontal" , "value":"horizontal"},
                    {"label":"vertical" , "value": "vertical"}
                ]
              }
           
            }
          },
          "grid":{
            "type":"object",
            "label":"Grid",
            "description": "Drawing grid in rectangular coordinate",
            "schema": {
                "left":{
                    "type": "number"
                },
                "right":{
                    "type":"number"
                },
                "bottom":{
                    "type": "number"
                },
                "top":{
                    "type": "number"
                }
          }
        },
          "xAxis": {
            "type": "object",
            "label": "X-Axis",
            "description":"The x axis in cartesian",
            "schema": {
              "type": {
                "type": "string",
                "label": "Type",
                "default": "category",
                "multiple":false,
                "possibles": [
                  { "label": "Category", "value": "category" },
                  { "label": "Value", "value": "value" },
                  { "label": "Time", "value": "time" }
                ]
              },
              "name":{
                "type": "string",
                "label":"x Axis's name",
                "options":{
                    "minLength":1,
                    "maxLength":10
                }
              },
              "data":{
                "type":"string",
                "required" : true,
                "possibles" : function generatePossiblesFromDataSchema(dataSchema) { // j'ai testé les fonctions et elles marchent 
                    const possibles = [];
                  
                    Object.keys(dataSchema).map((propertyName) => {
                      const property = dataSchema[propertyName];
                      
                      const possible= {
                        label: property.label ,
                        value: propertyName,
                      };
                  
                      possibles.push(possible);
                    });
                  
                    return possibles;
                  }
    
              }
              
    
              }
            }
          },
          "yAxis": {
            "type": "object",
            "label": "X-Axis",
            "description":"The y axis in cartesian",
            "schema": {
              "type": {
                "type": "string",
                "label": "Type",
                "default": "value",
                "multiple":false,
                "possibles": [
                  { "label": "Value", "value": "value" }
                ]
              },
              "name":{
                "type": "string",
                "label":"x Axis's name",
                "options":{
                    "minLength":1,
                    "maxLength":10
                }
              },
              "data":{
                "type":"string",
                "required" : true,
                "possibles" : function generatePossiblesFromDataSchema(dataSchema) {
                    const possibles = [];
                  
                    Object.keys(dataSchema).map((propertyName) => {
                      const property = dataSchema[propertyName];
                      
                      const possible= {
                        label: property.label ,
                        value: propertyName,
                      };
                  
                      possibles.push(possible);
                    });
                  
                    return possibles;
                  }
    
              }
              
    
              }
          },
          "dataZoom": {
            "type": "object",
            "label": "Data Zoom",
            "icon" : ZoomInIcon,
            "description":"data zoom of the component",
            "schema": {
                "type": {
                    "type": "string",
                    "label": "Type",
                    "multiple":false,
                    "default":"inside",
                    "possibles": [
                        { "label": "Inside", "value": "inside" },
                        { "label":"slider", "value": "slider"}
                    ]
                }
            }
          },
          "tooltip": {
            "type": "object",
            "label": "Tooltip",
            "description":"",
            "schema": {
              "show": {
                "type": "boolean",
                "label": "Show",
                "default": true
              },
              "trigger": {
                "type": "string",
                "label": "Trigger",
                "default": "axis",
                "multiple": false,
                "possibles": [
                  { "label": "Axis", "value": "axis" },
                  { "label": "Item", "value": "item" }
                ]
              },
              "formatter": {
                "type": "string",
                "label": "Formatter",
                "default": "{a} <br/>{b}: {c}"
              }
            }
          },
          "axisPointer":{
            "type": "object",
            "label": "Axis Pointer",
            "description":" axisPointer is a tool for displaying reference line and axis value under mouse pointer.",
            "schema":{
                "show": {
                    "type": "boolean",
                    "label" :"Show",
                    "default": true
                },
                "type": {
                    "type": "string",
                    "label": "Type",
                    "default": "line",
                    "multiple": false,
                    "possibles":[
                        { "label": "Line", "value": "line"},
                        { "label": "Shadow" , "value": "shadow" },
                        { "label": "None" , "value": "none" }
                    ]
                }
            }
          },
          "toolbox":{
            "type": "object",
            "label": "Toolbox",
            "description":"a group of utility tools, which include different type of features ",
            "schema":{
                "show": {
                    "type": "boolean",
                    "label": "Type",
                    "default" : true
                },
                "orient":{
                    "type":"string",
                    "label": "Orientation",
                    "default" :"horizontal",
                    "multiple" : false,
                    "possibles":[
                        {"label" : "horizontal" , "value": "horizontal"},
                        {"label" :"vertical", "value": "vertical" }
                    ]
                },
                "feature":{
                    "type":"object",
                    "label" : "Feature", 
                    "schema":{
                        "saveAsImage":{
                            "type":"object",
                            "label":"Save As Image",
                            "schema":{
                              "type":"string",
                              "default":"png"
                            }
                           
                        },
                        "magicType":{
                            "type":"object",
                            "label":"Magic Type",
                            "schema" : {
                                "show":{
                                    "type":"boolean",
                                    "label" : "Shadow",
                                    "default" : true
                                },
                                "type":{
                                    "type":"string",
                                    "label" :"Type",
                                    "multiple":false,
                                    "possibles":[
                                        {"label": "Line" , "value": "line"},
                                        {"label" : "Bar" , "value" : "bar"},
                                        {"label" : "Stack " , "value" : "stack"}
                                    ]
    
                                }
                            }
                        }
    
                        }
                      }
                    }
                },
                "brush":{
                    "type":"object",
                    "label": "Brush",
                    "description":"is an area-selecting component, with which user can select part of data from a chart to display in detail, or do calculations with them ",
                    "schema":{
                        "toolbox":{
                            "type":"string",
                            "label" : "Brush Toolbox",
                            "multiple":true,
                            "possibles":[
                                {"label" : "rect" , "value" : "rect"},
                                {"label" : "polygon" , "value" : "polygon"},
                                {"label" : "keep" , "value" : "keep"},
                                {"label" : "clear" , "value" : "clear"}
    
                            ]
                        }
                    }
                },
                "series": {
                    "type": "array",
                    "required": true,
                    "multiple": true,
                    "schemas": [ {
                      "options": {
                        "label": "Line",
                        "value" :"line",
                        "icon" : TimelineIcon,
                      },
                      "schema":{
                        "smooth":{
                          "type":"boolean",
                          "default": true
                        },
                        "data":{
                          "type":"string",
                          "required" : true,
                          "default": "",
                          "possibles" : function generatePossiblesFromDataSchema(dataSchema) {
                            const possibles = [];
                          
                            Object.keys(dataSchema).map((propertyName) => {
                              const property = dataSchema[propertyName];
                              
                              const possible= {
                                label: property.label ,
                                value: propertyName,
                              };
                          
                              possibles.push(possible);
                            });
                          
                            return possibles;
                          }
            
      
                            
    
                          
    
    
                        }
                      }
                      
                  },
                  {
                    "options": {
                      "label": "Bar",
                      "value" :"Bar",
                      "icon" : SignalCellularAltIcon
                    },
                    "schema":{
                      
                      "data":{
                        "type":"string",
                        "required" : true,
                        "possibles" : function generatePossiblesFromDataSchema(dataSchema) {
                            const possibles = [];
                          
                            Object.keys(dataSchema).map((propertyName) => {
                              const property = dataSchema[propertyName];
                              
                              const possible= {
                                label: property.label ,
                                value: propertyName,
                              };
                          
                              possibles.push(possible);
                            });
                          
                            return possibles;
                          }
            
                      }
                    }
                  },
                {
                  "options": {
                    "label": "Pie",
                    "value" :"Pie",
                    "icon" : PieChartIcon
                  },
                  "schema":{
                    "radius":{
                      "type":"number"
                      
                    },
                    "center":{
                      "type":"array",
                      "default": ["50%","50%"]
                    },
                    
                    
                    "data":{
                      "type":"string",
                      "required" : true,
                      "possibles" : function generatePossiblesFromDataSchema(dataSchema) {
                        const possibles = [];
                      
                        Object.keys(dataSchema).map((propertyName) => {
                          const property = dataSchema[propertyName];
                          
                          const possible= {
                            label: property.label ,
                            value: propertyName,
                          };
                      
                          possibles.push(possible);
                        });
                      
                        return possibles;
                      }
        
                    
                  }
                }            
            }
]}   
    }
