import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { 
  User, 
  Bell, 
  Shield, 
  Lock, 
  Palette, 
  Trash2,
  Save
} from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function Settings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Settings</h1>
        <p className="text-lg text-[#64748B]">Manage your account settings and preferences.</p>
      </div>

      {/* Account Settings */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-full bg-[#12A8E8]/10">
            <User className="w-5 h-5 text-[#12A8E8]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#0F172A]">Account</h2>
        </div>

        <div className="space-y-4 max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" defaultValue="Nancy" />
            <Input label="Last Name" defaultValue="Chen" />
          </div>
          <Input label="Email" type="email" defaultValue={currentUser.email} />
          <Input label="Role" defaultValue={currentUser.role} />
          <Input label="Location" defaultValue={currentUser.location} />
          <div>
            <label className="block text-[#0F172A] mb-2 font-medium">Bio</label>
            <textarea
              rows={4}
              defaultValue={currentUser.bio}
              className="w-full px-4 py-3 rounded-[18px] border border-[#E5E7EB] bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#12A8E8] focus:border-transparent transition-all resize-none"
            />
          </div>
          <div className="flex justify-end">
            <Button variant="primary">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-full bg-[#12A8E8]/10">
            <Bell className="w-5 h-5 text-[#12A8E8]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#0F172A]">Notifications</h2>
        </div>

        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center justify-between py-4 border-b border-[#E5E7EB]">
            <div>
              <p className="font-medium text-[#0F172A] mb-1">Project Updates</p>
              <p className="text-sm text-[#64748B]">Receive notifications about project activities</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#12A8E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#E5E7EB] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#12A8E8]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-[#E5E7EB]">
            <div>
              <p className="font-medium text-[#0F172A] mb-1">New Messages</p>
              <p className="text-sm text-[#64748B]">Get notified when you receive new messages</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#12A8E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#E5E7EB] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#12A8E8]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-[#E5E7EB]">
            <div>
              <p className="font-medium text-[#0F172A] mb-1">Application Status</p>
              <p className="text-sm text-[#64748B]">Updates on your job applications</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#12A8E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#E5E7EB] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#12A8E8]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-[#0F172A] mb-1">Weekly Summary</p>
              <p className="text-sm text-[#64748B]">Receive a weekly summary of your activities</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#12A8E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#E5E7EB] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#12A8E8]"></div>
            </label>
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-full bg-[#12A8E8]/10">
            <Shield className="w-5 h-5 text-[#12A8E8]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#0F172A]">Security</h2>
        </div>

        <div className="space-y-4 max-w-2xl">
          <Input label="Current Password" type="password" />
          <Input label="New Password" type="password" />
          <Input label="Confirm New Password" type="password" />
          <div className="flex justify-end">
            <Button variant="primary">
              <Lock className="w-4 h-4" />
              Update Password
            </Button>
          </div>
        </div>
      </Card>

      {/* Privacy */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-full bg-[#12A8E8]/10">
            <Lock className="w-5 h-5 text-[#12A8E8]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#0F172A]">Privacy</h2>
        </div>

        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center justify-between py-4 border-b border-[#E5E7EB]">
            <div>
              <p className="font-medium text-[#0F172A] mb-1">Profile Visibility</p>
              <p className="text-sm text-[#64748B]">Make your profile visible to everyone</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#12A8E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#E5E7EB] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#12A8E8]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-[#0F172A] mb-1">Show Activity Status</p>
              <p className="text-sm text-[#64748B]">Let others see when you're online</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#12A8E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#E5E7EB] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#12A8E8]"></div>
            </label>
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="border-[#EF4444]">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-full bg-[#EF4444]/10">
            <Trash2 className="w-5 h-5 text-[#EF4444]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#EF4444]">Danger Zone</h2>
        </div>

        <div className="space-y-4 max-w-2xl">
          <div className="p-6 rounded-[18px] border border-[#EF4444]/20 bg-[#EF4444]/5">
            <h3 className="font-semibold text-[#0F172A] mb-2">Delete Account</h3>
            <p className="text-sm text-[#64748B] mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <Button variant="danger">
              <Trash2 className="w-4 h-4" />
              Delete Account
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
