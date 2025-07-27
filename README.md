# ulisses-2025-project

## Numerical simulation of the nurdle spill using OpenDrift.OceanDrift


1. Create and activate the anaconda environment (requires installing conda beforehand)
```
conda env create -f environment.yml
conda activate opendrift
```

2. Create an .env file with the following variables
```
CMDS_USERNAME=  # copernicus marine username
CMDS_PASSWORD=  # copernicus marine password


# the number of particles for the simulation
PARTICLES_NUMBER = 50000
```
