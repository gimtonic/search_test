<?php

require_once 'class/GoogleCustomSearch.php';
require_once '../../config/constants.php';

/** @var  iMarc\GoogleCustomSearch $search query to Google API*/
$search = new iMarc\GoogleCustomSearch(SEARCH_ENGINE_ID, API_KEY);
$responsesFromGoogle = $search->search($_GET['q']);

echo json_encode($responsesFromGoogle->results);