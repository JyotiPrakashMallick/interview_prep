async function deleteMultipleUsers(usernamelist, deleteMultiCallBack) {
  try {
    const configValues = await configDatabaseValue();
    let userList = await getListOfValidUserForDeletion(usernamelist);
    if (userList && userList.usereligible && userList.usernoteligible) {
      let completedDeletions = 0;
      const userEligible = userList.usereligible;
      const userNotEligible = userList.usernoteligible;
      logger.info(
        `Multiple users have been submitted for deletion. The list of users to be deleted is: ${usernamelist}. We'll notify you once the deletion process is complete.`
      );
      logger.info(
        `Out of the user list, some users could not be deleted as they are not present in the database. The list of non-eligible users is: ${userNotEligible}. Please ensure the correct user information and try again.`
      );
      if (userEligible.length === 0) {
        return deleteMultiCallBack(`${stdmessage.std_message_26}`);
      } else if (userEligible.length === 1) {
        logger.info(`${stdmessage.std_message_36}`);
        let username = userEligible[0];
        const singleUserDeletion = {
          method: "POST",
          url: `${config_files.database_deletesingle_url}`,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": `${configValues.DATABASE_API_KEY}`,
            Accept: "application/json",
          },
          body: JSON.stringify({
            dataSource: `${configValues.DATABASE_CLUSTER}`,
            database: `${configValues.DATABASE_NAME}`,
            collection: `${configValues.USER_DETAILS}`,
            filter: {
              ...(username ? { username } : {}),
            },
          }),
        };
        request(singleUserDeletion, function (error, response) {
          if (error) {
            return deleteMultiCallBack(`${stdmessage.std_message_28}`);
          }
          const response_multiUserDel = JSON.parse(response.body);
          deleteMultiCallBack(response_multiUserDel);
        });
      } else {
        logger.info(
          `Out of the provided list, ${userEligible.length} user(s) are eligible for deletion. Initiating the deletion process. Please wait for the completion confirmation.`
        );
        for (let iuser = 0; iuser <= userEligible.length; iuser++) {
          let username = userEligible[iuser];
          const multiUserDeletion = {
            method: "POST",
            url: `${config_files.database_deletesingle_url}`,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Request-Headers": "*",
              "api-key": `${configValues.DATABASE_API_KEY}`,
              Accept: "application/json",
            },
            body: JSON.stringify({
              dataSource: `${configValues.DATABASE_CLUSTER}`,
              database: `${configValues.DATABASE_NAME}`,
              collection: `${configValues.USER_ACTIVITY_DETAILS}`,
              filter: {
                ...(username ? { username } : {}),
              },
            }),
          };
          request(multiUserDeletion, function (error, response) {
            if (error) {
              return deleteMultiCallBack(`${stdmessage.std_message_37}`);
            }
            const response_multiUserDel = JSON.parse(response.body);
            completedDeletions += response_multiUserDel.deletedCount;
            if (userEligible.length === completedDeletions) {
              deleteMultiCallBack(`${stdmessage.std_message_38}`);
            }
          });
        }
      }
    } else {
      console.error(`${stdmessage.std_message_39}`);
      return deleteMultiCallBack(`${stdmessage.std_message_28}`);
    }
  } catch (error) {
    console.error("Error in deleteMultiple:", error);
    return deleteMultiCallBack(`${stdmessage.std_message_28}`);
  }
}