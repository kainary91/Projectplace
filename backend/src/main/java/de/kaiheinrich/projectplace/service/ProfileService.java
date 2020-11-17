package de.kaiheinrich.projectplace.service;

import de.kaiheinrich.projectplace.db.ProfileMongoDb;
import de.kaiheinrich.projectplace.dto.ProfileDto;
import de.kaiheinrich.projectplace.model.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {

    private final ProfileMongoDb profileDb;

    @Autowired
    public ProfileService(ProfileMongoDb profileDb) {
        this.profileDb = profileDb;
    }

    public List<Profile> getProfiles() {
        return profileDb.findAll();
    }

    public Optional<Profile> getProfileByUsername(String username) {
        return profileDb.findById(username);
    }

    public Profile updateProfile(ProfileDto profileDto, String username) {
        Profile updatedProfile = Profile.builder()
                .username(username)
                .birthday(profileDto.getBirthday())
                .location(profileDto.getLocation())
                .skills(profileDto.getSkills())
                .name(profileDto.getName())
                .build();

        return profileDb.save(updatedProfile);
    }
}