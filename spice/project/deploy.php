<?php
/*
 * This file has been generated automatically.
 * Please change the configuration for correct use deploy.
 */

require 'recipe/common.php';

// Set configurations
set('repository', 'git@github.com:Panenco/Spice.git');
set('shared_files', []);
set('shared_dirs', []);
set('writable_dirs', []);

// Configure servers
server('prod', '188.166.57.147', 22)
    ->user('spiceagency')
    ->password('exG6BLemHx')
    ->env('deploy_path', '/srv/users/spiceagency/apps/spice');

/**
 * Main task
 */
task('deploy', [
    'deploy:prepare',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:symlink',
    'cleanup',
])->desc('Deploy your project');

after('deploy', 'success');