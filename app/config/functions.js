import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage,
  WebView,
  StyleSheet,
  Platform
} from 'react-native';
import { Grid, Col, Row, Icon } from 'react-native-elements';
import { styles, htmlstyles } from '../styles/common';
import HTMLView from 'react-native-htmlview';
import RNFetchBlob from 'react-native-fetch-blob'

export const ClassTypes = {
  'Mercenary': 'Warrior',
  'Ranger': 'Warrior',
  'Templar': 'Warrior',
  'Assassin': 'Rogue',
  'Witch Hunter': 'Rogue',
  'Nightblade': 'Rogue',
  'Mage': 'Scholar',
  'Bard': 'Scholar',
  'Druid': 'Scholar',
}

export function cleanHTML(html){
  return html.replace(/“|`/g, '"').replace(/<damage>/, "[damage]").replace(/<type>/, "[type]").replace(/<elemental>/, "[elemental]")
}

export function buildSubtitle(ele, type) {

  items = [];
  if (type == "class"){
    items.push(<Text key={"class_type"} style={styles.subtitleText}>{ClassTypes[ele.class]}</Text>);
    if(ele.frag_cost !== "" && ele.frag_cost != null){
      items.push(<Text key={"frag_cost"} style={styles.subtitleText}>Frag Cost: {ele.frag_cost}</Text>);
    }
    if(ele.optional != ""){
      if (ele.optional.includes("vocation")) {
        items.push(<Text key={"vocation"} style={styles.subtitleText}>Vocation</Text>);
      }
      if (ele.optional.includes("occupation")) {
        items.push(<Text key={"occupation"} style={styles.subtitleText}>Renowned Occupation: Requires lead shaper approval.</Text>);
      }
    }
  }
  if(type == "race") {
    if(ele.appendix !== "" && ele.appendix != null){
      items.push(<Text key={"appendix"} style={styles.subtitleText}>APPENDIX RULEBOOK</Text>);
    }
    if(ele.life_span !== "" && ele.life_span != null){
      items.push(<Text key={"life_span"} style={styles.subtitleText}>Life Span: {ele.life_span}</Text>);
    }
    if(ele.frag_cost !== "" && ele.frag_cost != null){
      items.push(<Text key={"frag_cost"} style={styles.subtitleText}>Frag Cost: {ele.frag_cost}</Text>);
    }
  }
  if(type == "skill") {
    if(ele.prerequesites !== "" && ele.prerequesites != null){
      items.push(<Text key={"prerequesites"} style={styles.subtitleText}>Prerequesites: {cleanHTML(ele.prerequesites)}</Text>);
    }
    if(ele.class !== "" && ele.class != null){
      items.push(<Text key={"class"} style={styles.subtitleText}>Class: {cleanHTML(ele.class)}</Text>);
    }
    if(ele.race !== "" && ele.race != null){
      items.push(<Text key={"race"} style={styles.subtitleText}>Race: {cleanHTML(ele.race)}</Text>);
    }
    if(ele.level !== "" && ele.level != null){
      items.push(<Text key={"level"} style={styles.subtitleText}>Level: {cleanHTML(ele.level)}</Text>);
    }

  }
  return <View style={{flexDirection: 'column', left: 10}}>{items}</View>;

}

export function renderClassMetaInfo(description, frag_cost, optional) {

  var striptags = require('striptags');
  let items = [];

  if(frag_cost !== "" && frag_cost != null){
    items += `<h4>Frag Cost: ${frag_cost}</h4>`;
  }
  if(optional !== null && optional !== ""){
    if (optional.includes("vocation")) {
      items += `<h4>VOCATION: Replaces standard class abilities.</h4>`;
    }
    if (optional.includes("occupation")) {
      items += `<h4>RENOWNED OCCUPATION: Requires lead shaper approval. See Rulebook.</h4>`;
    }
  }
  if(description !== "" && description != null){
    items += `<h2>Description:</h2> ${description}`;
  }

  return (<View style={{padding: 10}}><HTMLView
            stylesheet={htmlstyles}
            value={items}
          /></View>)
}

export function renderSkillMetaInfo(skill, type) {
  let items = [];
  if(type == 'specific'){
    items.push(<Text key={"name"} style={styles.skillText}>Name: {skill['name']}</Text>)
  }
  if(skill['level'] !== "" && skill['level'] != null){
    items.push(<Text key={"level"} style={styles.skillText}>Level: {skill['level']}</Text>)
  }
  if(skill['race'] !== "" && skill['race'] != null && type != 'specific'){
    items.push(<Text key={"race"} style={styles.skillText}>Race: {skill['race']}</Text>)
  }
  if(skill['class'] !== "" && skill['class'] != null && type != 'specific'){
    items.push(<Text key={"class"} style={styles.skillText}>Class: {skill['class']}</Text>)
  }
  if(skill['prerequesites'] !== "" && skill['prerequesites'] != null){
    items.push(<Text key={"prerequesites"} style={styles.skillText}>Prerequesites: {cleanHTML(skill['prerequesites'])}</Text>)
  }
  console.log(type);
  if(type != undefined && type != 'class' && type != 'race' && type != 'specific'){
    items.push(<View key={"costLabel"} style={{flex:1}}><Text key={"GridHeader"} style={styles.skillText}>Cost</Text></View>)
    items.push(
      <Grid key={"costGrid"}>
        <Col size={10}>
          <Row><Icon name="shield" type="font-awesome" size={35} color={'#eee'} /></Row>
          <Row><Icon name="bomb" type="font-awesome" size={35} color={'#eee'} /></Row>
          <Row><Icon name="magic" type="font-awesome" size={35} color={'#eee'} /></Row>
        </Col>
        <Col size={30}>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Mercenary</Text>
              <Text style={styles.cost}>{skill['mercenary_cost']}</Text>
            </View>
          </Row>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Assassin</Text>
              <Text style={styles.cost}>{skill['assassin_cost']}</Text>
            </View>
          </Row>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Mage</Text>
              <Text style={styles.cost}>{skill['mage_cost']}</Text>
            </View>
          </Row>
        </Col>
        <Col size={30}>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Ranger</Text>
              <Text style={styles.cost}>{skill['ranger_cost']}</Text>
            </View>
          </Row>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Nightblade</Text>
              <Text style={styles.cost}>{skill['nightblade_cost']}</Text>
            </View>
          </Row>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Druid: </Text>
              <Text style={styles.cost}>{skill['druid_cost']}</Text>
            </View>
          </Row>
        </Col>
        <Col size={30}>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Templar</Text>
              <Text style={styles.cost}>{skill['templar_cost']}</Text>
            </View>
          </Row>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Witch Hunter</Text>
              <Text style={styles.cost}>{skill['witch_hunter_cost']}</Text>
            </View>
          </Row>
          <Row style={styles.costRow}>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Bard</Text>
              <Text style={styles.cost}>{skill['bard_cost']}</Text>
            </View>
          </Row>
        </Col>
      </Grid>
    )
    items.push(
      <Grid  key={"costGrid2"}>
        <Col size={10}></Col>
        <Col size={45}>
          <Row>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Champion</Text>
              <Text style={styles.cost}>{skill['champion_cost']}</Text>
            </View>
          </Row>
        </Col>
        <Col size={45}>
          <Row>
            <View style={{flex:1}}>
              <Text style={styles.costHeader}>Demagogue: </Text>
              <Text style={styles.cost}>{skill['demagogue_cost']}</Text>
            </View>
          </Row>
        </Col>
      </Grid>
    )
  }
  if(skill['description'] !== "" && skill['description'] != null){
    items.push(<HTMLView style={{marginTop:10}} key={"description"} stylesheet={htmlstyles} value={`<h2>Description</h2><hr/> ${cleanHTML(skill['description'])}`} />);
  }

  return (<View style={{padding: 10}}>{items}</View>)
}

export function renderRaceMetaInfo(description, optional, frag_cost, advantages, disadvantages, life_span, racial_characteristics) {

  let items = "";

  if(description !== "" && description != null){
    items += `<h2>Description:</h2> <p>${description}</p>`;
  }
  if(frag_cost !== "" && frag_cost != null){
    items += `<h2>Frag Cost:</h2> <p>${frag_cost}</p>`;
  }
  if(racial_characteristics !== "" && racial_characteristics != null){
    items += `<h2>Racial Characteristics:</h2>${racial_characteristics}`;
  }
  if(life_span !== "" && life_span != null){
    items += `<h2>Life Span:</h2><p>${life_span}</p>`;
  }
  if(advantages !== "" && advantages != null){
    items += `<h2>Advantages:</h2>${advantages}`;
  }
  if(disadvantages !== "" && disadvantages != null){
    items += `<h2>Disadvantages:</h2>${disadvantages}`;
  }
  items = `<html><body>${items}</body></html>`

  return (<View style={{padding: 10}}><HTMLView
            stylesheet={htmlstyles}
            value={items}
          /></View>)

}
export function renderSphereMetaInfo(sphere) {

  let items = "";

  items += `<h1>${sphere.name}</h1>`;

  if(sphere.focus !== "" && sphere.focus != null){
    items += `<h2>Focus:</h2> <p>${sphere.focus}</p>`;
  }
  if(sphere.frag_cost !== "" && sphere.frag_cost != null){
    items += `<h2>Frag Cost:</h2> <p>${sphere.frag_cost}</p>`;
  }
  if(sphere.description !== "" && sphere.description != null){
    items += `<h2>Description:</h2> ${sphere.description}`;
  }
  items = `<html><body>${items}</body></html>`

  return (<View style={{padding: 10}}><HTMLView
            stylesheet={htmlstyles}
            value={items}
          /></View>)

}

export function validatePhotoUrl(photo) {
  if (photo == false) {
    photo = 'app/assets/UW-DEFAULT.png';
  }
  return photo;
}

export function loadLocalPhoto(component, ele, type, stateType) {
  console.log(`Getting: ${`@UWData:${type}:${encodeURI(ele)}:photo`}`);
  AsyncStorage.getItem(`@UWData:${type}:${encodeURI(ele)}:photo`).then((localphoto) => {
    if (localphoto !== null){
      console.log(localphoto);
      // We have data!
      if(stateType == 'uri'){
        component.setState({ photoURI: localphoto });
      } else if (stateType == 'photo_array') {
        photos = component.state.ClassPhotos;
        photos[ele] = localphoto;
        console.log(photos[ele]);
        component.setState({ ClassPhotos: photos });
      } else {
        return localphoto;
      }
    }
  });
}

export function reloadAllData(){

    console.log('Trying to reload data.');
  AsyncStorage.getItem('@UWData:api_version').then((local_api_version) => {
    // Load Data from API
    fetch('https://tempestgrove.com/wp-json/wp/v2/pages/1403', { })
      .then( (response) => {
      return response.json()
    })
    .then( (responseJson) => {
      remote_api_version = responseJson.acf.api_data_version;
      if(local_api_version != remote_api_version){
        AsyncStorage.setItem('@UWData:api_version', remote_api_version);
        loadSphereData(null);
        loadRaceData(null);
        loadClassData(null);
        loadSkillData(null);
        loadSkillsByType(null, 'racial_skills');
        loadSkillsByType(null, 'class_skills');
      }
    });
  });
}

export function loadRaceData(component) {

  try {

    AsyncStorage.getItem('@UWData:races').then((localRaces) => {
    if (localRaces !== null && component !== null){
      // We have data!!
      component.setState({ RaceData: JSON.parse(localRaces) });
    } else {

      // Load Data from API
      fetch('https://tempestgrove.com/wp-json/wp/v2/pages/888', { })
        .then( (response) => {
        return response.json()
      })
      .then( (responseJson) => {
        responseJson.acf.races.map((race) => {
          if(race.photo != false){
            RNFetchBlob
            .config({
              fileCache : true,
              // by adding this option, the temp files will have a file extension
              appendExt : 'png'
            })
            .fetch('GET', race.photo, {
              //some headers ..
            })
            .then((res) => {
              // the temp file path with file extension `png`
              race.photo = (Platform.OS === 'android' ? 'file://' + res.path()  : '' + res.path());
            });
          }
        });
        if (component !== null) {
          component.setState({ RaceData: responseJson.acf.races });
        }
        AsyncStorage.setItem('@UWData:races', JSON.stringify(responseJson.acf.races));
      })
    }
    });

  } catch (error) {
  console.log(error);
    // Error saving data
  }

}
export function loadSphereData(component) {

  try {

    AsyncStorage.getItem('@UWData:spheres').then((localSpheres) => {
    if (localSpheres !== null && component !== null){
      // We have data!!
      component.setState({ SphereData: JSON.parse(localSpheres) });
    } else {

      // Load Data from API
      fetch('https://tempestgrove.com/wp-json/wp/v2/pages/878', { })
        .then( (response) => {
        return response.json()
      })
      .then( (responseJson) => {
        if (component !== null) {
          component.setState({ SphereData: responseJson.acf.spell_spheres });
        }
        AsyncStorage.setItem('@UWData:spheres', JSON.stringify(responseJson.acf.spell_spheres));
      })
    }
    });

  } catch (error) {
  console.log(error);
    // Error saving data
  }

}

export function loadClassData(component) {
  try {

    AsyncStorage.getItem('@UWData:classes').then((localClasses) => {
    if (localClasses !== null && component !== null){
      // We have data!!
      component.setState({ ClassData: JSON.parse(localClasses) });
    } else {

      // Load Classes
      fetch('https://tempestgrove.com/wp-json/wp/v2/pages/889', { })
        .then( (response) => {
        return response.json()
      })
      .then( (responseJson) => {
        responseJson.acf.classes.map((pc_class) => {
          if(pc_class.photo != false){
            RNFetchBlob
            .config({
              fileCache : true,
              // by adding this option, the temp files will have a file extension
              appendExt : 'png'
            })
            .fetch('GET', pc_class.photo, {
              //some headers ..
            })
            .then((res) => {
              // the temp file path with file extension `png`
              pc_class.photo = (Platform.OS === 'android' ? 'file://' + res.path()  : '' + res.path());
            });
          }
        });
        if(component !== null) {
          component.setState({ ClassData: responseJson.acf.classes });
        }
        AsyncStorage.setItem('@UWData:classes', JSON.stringify(responseJson.acf.classes));
      })
    }
    });

  } catch (error) {
    console.log(error);
    // Error saving data
  }

}

export function loadSpellData(component, sphere, frag) {
  try {

    if(frag) {
      url = 'https://tempestgrove.com/wp-json/wp/v2/pages/1312';
    } else {
      url = 'https://tempestgrove.com/wp-json/wp/v2/pages/1291';
    }

    AsyncStorage.getItem(`@UWData:spells:${sphere}`).then((localSpells) => {
      if (localSpells !== undefined && localSpells != [] && component !== null){
        spells = [];
        var SpellsArray = [].concat.apply([], JSON.parse(localSpells));
        SpellsArray.map((spell) => {
          if(spell.sphere == sphere) {
            spells.push(spell);
          }
        });
        // We have data!!
        component.setState({ SpellData: spells });
      } else {
        // Load Classes// Load Classes
        // send http request in a new thread (using native code)
        RNFetchBlob.fetch('GET', url, {
          'Content-Type' : 'multipart/form-data',
            // more headers  ..
          })
          // when response status code is 200
          .then((res) => {
            // the conversion is done in native code
            let base64Str = res.base64()
            // the following conversions are done in js, it's SYNC
            let text = res.text()
            let responseJson = res.json()

            spells = {};
            var SpellsArray = [].concat.apply([], responseJson.acf.spells);
            SpellsArray.map((spell) => {
              if(spell.sphere == sphere) {
                spells[sphere].push(spell);
              }
            });
            spell.map((array_sphere, spells) => {

              if(component !== null && sphere == array_sphere) {
                component.setState({ SpellData: spells });
              }
              AsyncStorage.setItem(`@UWData:spells:${array_sphere}`, JSON.stringify(spells));
            })
          })
          // Status code is not 200
          .catch((errorMessage, statusCode) => {
            // error handling
            console.log('error');
            console.log(errorMessage);
          })
      }
    });

  } catch (error) {
    console.log(error);
    // Error saving data
  }

}


// const remote_urls = [
//   ['https://tempestgrove.com/wp-json/wp/v2/pages/889', this.state.Classes, 'classes'],
//   ['https://tempestgrove.com/wp-json/wp/v2/pages/888', this.state.Races, 'race'],
//   ['https://tempestgrove.com/wp-json/wp/v2/pages/897', this.state.Skills, 'skills'],
//   ['https://tempestgrove.com/wp-json/wp/v2/pages/890', this.state.Skills, 'skills'],
//   ['https://tempestgrove.com/wp-json/wp/v2/pages/907', this.state.Skills, 'skills'],
//   ['https://tempestgrove.com/wp-json/wp/v2/pages/908', this.state.Skills, 'skills'],
//   ['https://tempestgrove.com/wp-json/wp/v2/pages/878', this.state.Spheres, 'spell_spheres'],

export function loadSkillsByType(component, type, ele) {
  try {
    skills = [];
    AsyncStorage.getItem(`@UWData:${type}`).then((localSkills) => {
      if (localSkills !== null && localSkills.length != 0 && component !== null){
        let skillsJSON = JSON.parse(localSkills);
        if(type == "racial_skills") {
          component.setState({ RaceSkillData: skillsJSON });
        } else if(type == "class_skills"){
          component.setState({ ClassSkillData: skillsJSON });
        }
      } else {
        skill_urls = {
          'racial_skills': 'https://tempestgrove.com/wp-json/wp/v2/pages/897',
          'skills': 'https://tempestgrove.com/wp-json/wp/v2/pages/890',
          'frag_skills': 'https://tempestgrove.com/wp-json/wp/v2/pages/909',
          'class_skills': 'https://tempestgrove.com/wp-json/wp/v2/pages/908'
        };

        // Load Classes
        fetch(skill_urls[type], { })
          .then( (response) => {
          return response.json()
        })
        .then( (responseJson) => {
          if(component !== null) {
            if(type == "racial_skills") {
              component.setState({ RaceSkillData: JSON.parse(responseJson.acf.skills) });
            } else if(type == "class_skills"){
              component.setState({ ClassSkillData: JSON.parse(responseJson.acf.skills) });
            }
          }
          AsyncStorage.setItem(`@UWData:${type}`, JSON.stringify(responseJson.acf.skills));

        })
      }
    });

  } catch (error) {
    console.log(error);
    // Error saving data
  }

}

export function getSpecificSkills(component, type, ele) {
  $returns = [];
  AsyncStorage.getItem(`@UWData:${type}`).then((localSkills) => {
    let skillsJSON = JSON.parse(localSkills);
    skillsJSON.map((skill) => {
      if (type == "class_skills") {
        queryAttr = skill['class'];
      } else if (type == 'racial_skills') {
        queryAttr = skill['race'];
      }
      if(queryAttr == ele) {
        $returns.push(skill)
      }
    });
    component.setState({ specificSkillData: $returns });
  });
}

export function loadSkillData(component, ele) {
  try {
    skills = [];
    skillsHash = {};
    skillsHash['Warrior'] = [];
    skillsHash['Rogue'] = [];
    skillsHash['Scholar'] = [];

      skill_urls = [
        ['https://tempestgrove.com/wp-json/wp/v2/pages/890', 'skills'],
        ['https://tempestgrove.com/wp-json/wp/v2/pages/909', 'frag_skills']
      ];

      skill_urls.map((skill_url) => {
        // Load Classes
        AsyncStorage.getItem(`@UWData:${skill_url[1]}`).then((localSkills) => {
          if (localSkills !== null && localSkills.length != 0 && component !== null){

            JSON.parse(localSkills).map((skill) => {
              if (skill['category'] != '') {
                if(skillsHash[skill['category']] == undefined){
                  skillsHash[skill['category']] = [];
                }
                skillsHash[skill['category']].push(skill)
              }
            });
            component.setState({ ScholarSkillData: skillsHash['Scholar'] });
            component.setState({ RogueSkillData: skillsHash['Rogue'] });
            component.setState({ WarriorSkillData: skillsHash['Warrior'] });
            component.setState({ ProductionSkillData: skillsHash['Production'] });

          } else {
          fetch(skill_url[0], { })
            .then( (response) => {
            return response.json()
          })
          .then( (responseJson) => {
            switch(skill_url[1]){
              case 'skills':
                responseJson.acf.skills.map((skill) => {
                  skillsHash[skill['category']].push(skill)
                });
                AsyncStorage.setItem(`@UWData:skills`, JSON.stringify(responseJson.acf.skills));
                AsyncStorage.setItem(`@UWData:warrior_skills`, JSON.stringify(skillsHash['Warrior']));
                AsyncStorage.setItem(`@UWData:rogue_skills`, JSON.stringify(skillsHash['Rogue']));
                AsyncStorage.setItem(`@UWData:scholar_skills`, JSON.stringify(skillsHash['Scholar']));
                AsyncStorage.setItem(`@UWData:production_skills`, JSON.stringify(skillsHash['Production']));

                if(component !== null) {
                  component.setState({ ScholarSkillData: skillsHash['Scholar'] });
                  component.setState({ RogueSkillData: skillsHash['Rogue'] });
                  component.setState({ WarriorSkillData: skillsHash['Warrior'] });
                  component.setState({ ProductionSkillData: skillsHash['Production'] });
                  component.setState({ SkillData: responseJson.acf.skills });
                }

                break;
              case 'frag_skills':
                AsyncStorage.setItem(`@UWData:${skill_url[1]}`, JSON.stringify(responseJson.acf.skills));
                if(component !== null) {
                  component.setState({ FragSkillData: responseJson.acf.skills });
                }
                break;
            }
          });
        }

      });
    });

  } catch (error) {
    console.log(error);
    // Error saving data
  }

}
