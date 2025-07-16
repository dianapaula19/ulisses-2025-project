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

# the coordinates of the data fetched from copernicus (these match the ross sea area)

CMEMS_MIN_LAT = -78.0
CMEMS_MAX_LAT = -70.0
CMEMS_MIN_LON = 162.0       
CMEMS_MAX_LON = 220.0         


# the spill point coords
SPILL_POINT_LON = -171.21 
SPILL_POINT_LAT = -74.78  

# the number of particles for the simulation
PARTICLES_NUMBER = 10000
```