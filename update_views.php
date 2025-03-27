<?php
header('Content-Type: application/json');

$brojPregledaFajl = 'broj_pregleda.txt';

if (!file_exists($brojPregledaFajl)) {
    file_put_contents($brojPregledaFajl, '0');
}

$brojPregleda = intval(file_get_contents($brojPregledaFajl)) + 1;

if (file_put_contents($brojPregledaFajl, $brojPregleda) !== false) {
    echo json_encode(['brojPregleda' => $brojPregleda]);
} else {
    echo json_encode(['error' => 'Neuspelo ažuriranje broja pregleda']);
}
?>