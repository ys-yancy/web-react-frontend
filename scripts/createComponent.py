#!/usr/bin/python3

import os, sys, getopt;

src_dirname = 'src';
style_dir_name = '/style';
default_file_content = '// Automatic generated \n';


# 获取要创建的文件及文件夹
def get_component_files(component_dirname, name):
  use_name = name;

  # name: mobile-header -> header
  try:
    if name.find('-'):
      split_names = name.split('-', 1);
      if split_names[1] != '':
        use_name = split_names[1];
  except IndexError:
    use_name = name;


  create_options = [
    # style
    '/style/' + use_name.lower() + '.scss',
    '/style/index.ts',

    # component
    '/' + use_name.capitalize() + '.tsx',

    # export 
    '/index.ts'
  ];

  create_paths = [];
  for file in create_options:
    create_paths.append(
      component_dirname + file
    );
  
  return create_paths;

def create_component_dirs(component_dirname):
  os.makedirs(component_dirname);
  os.makedirs(component_dirname + style_dir_name);


# 创建组件
def create_component(dir_name, component_name):
  print('[*] create component ', dir_name + '/' + component_name);
  
  # 操作目录
  # root_dirname = os.path.abspath(
  #   os.path.dirname(os.getcwd())
  # );
  # 使用npm执行
  root_dirname = os.path.abspath(os.path.dirname('__filename__'));
  component_dirname = os.path.abspath(
    os.path.join(root_dirname, src_dirname, dir_name, component_name)
  );

  # 是否已存在
  if os.path.exists(component_dirname):
    print('[*] component already exists');
    return;

  # 创建组件目录
  create_component_dirs(component_dirname);

  # 将要创建的文件
  create_component_files = get_component_files(component_dirname, component_name);

  print(component_dirname);

  try:
    for component_file in create_component_files:
      file = open(component_file, 'w');
      file.write(default_file_content);
      file.close();
  except IOError:
      os.removedirs(component_dirname);
      print('[*] create component failed');
  else:
      print('[*] create component successed', dir_name + '/' + component_name);


# init
def init(argv):
  opts, args = getopt.getopt(
    sys.argv[1:],
    '-c:-b:',
    ['component=', 'business-components=']
  );

  dir_name = '';
  component_name = '';
  for name, value in opts:
    if name in ('-c', '--component'):
      dir_name = 'components';
      component_name = value;
    if name in ('-b', '--business-components'):
      dir_name = 'business-components';
      component_name = value;

  if dir_name != '' and component_name != '':
    create_component(dir_name, component_name);


if __name__ == "__main__":
  init(sys.argv[1:]);