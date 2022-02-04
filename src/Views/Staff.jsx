import data from '../data/staff.json';
import blankPfp from '../assets/img/discord-blank2.png';

export const Staff = () => {
    return (
       <main className="has-text-centered">
           <h1 className="is-size-1 pagetitle">Codecademy Community Server Staff</h1>
           <p className="is-size-4 mb-3">Meet our server staff!</p>
           <section className="container has-background-white mb-6 p-3">
               <h2 className="is-size-2">Admins</h2>
               <p>Admins are the heads of our staff and the people who manage how the group is run.</p>
               <div className="staff-list">
                   {
                       data["superadmins"].map((user) => {
                            return <div key={user["name"]} className="staff-card has-background-white">
                                <img className="profile-picture" src={user["pfp"]}/>
                                <p className="name super-admin">{user["name"]}</p>
                            </div>
                       })
                    }{
                       data["admins"].map((user) => {
                        return <div key={user["name"]} className="staff-card has-background-white">
                                <img className="profile-picture" src={user["pfp"]}/>
                                <p className="name admin">{user["name"]}</p>
                            </div>
                        })
                    }

               </div>
           </section>
           <section className="container has-background-white mb-6 p-3">
               <h2 className="is-size-2">Moderators</h2>
               <p>Moderators comprise our main staff team and aim to keep the peace and happiness in our community.</p>
               <div className="staff-list">
                    {
                       data["mods"].map((user) => {
                        return <div key={user["name"]} className="staff-card has-background-white">
                                <img className="profile-picture" src={user["pfp"]}/>
                                <p className="name mod">{user["name"]}</p>
                            </div>
                        })
                    }
                    <div className="staff-card has-background-white">
                        <img className="profile-picture" src={blankPfp}/>
                        <p className="name mod">tgrtim</p>
                    </div>

               </div>
           </section>
           <section className="container has-background-white mb-6 p-3">
               <h2 className="is-size-2">Code Counselors</h2>
               <p>Code Counselors are members of the community who have been recognised as being the most active, friendly and helpful.</p>
               <div className="staff-list">
                    {
                       data["cocos"].map((user) => {
                        return <div key={user["name"]} className="staff-card has-background-white">
                                <img className="profile-picture" src={user["pfp"]}/>
                                <p className="name coco">{user["name"]}</p>
                            </div>
                        })
                    }
               </div>
           </section>
       </main>
          
    );
}
