using UnityEngine;
using UnityEditor;
using DCM.ReorderableList;

namespace DCM {
    [CustomEditor(typeof(DrawCallMinimizer))]
    public class DrawCallMinimizerInspector : Editor {

        private DrawCallMinimizer drawCallTarget;
        private SerializedProperty destroyOriginalGameObject;
        private SerializedProperty textureAtlasProperties;
        private bool _showAtlasProperties = true;
        private GUIContent[] sizeOptions = new GUIContent[] {
                new GUIContent("32"),
                new GUIContent("64"),
                new GUIContent("128"),
                new GUIContent("256"),
                new GUIContent("512"),
                new GUIContent("1024"),
                new GUIContent("2048"),
                new GUIContent("4096")
        };
        private int[] sizeOptionsValues = new int[] {
                32,
                64,
                128,
                256,
                512,
                1024,
                2048,
                4096
        };

        void OnEnable() {
            drawCallTarget = target as DrawCallMinimizer;
            destroyOriginalGameObject = serializedObject.FindProperty("destroyOriginalGameObject");
            textureAtlasProperties = serializedObject.FindProperty("_textureAtlasProperties");
        }

        public override void OnInspectorGUI() {
            serializedObject.Update();
            EditorGUILayout.PropertyField(destroyOriginalGameObject, new GUIContent("Destroy Original Object", "Setting this to true will destroy the original game object that stored the original meshes. This is useful to clear up memory and other resources from being used. If you have scripts attached to the original object, or colliders, you will want this turned off"));
            _showAtlasProperties = EditorGUILayout.Foldout(_showAtlasProperties, new GUIContent("Atlas Properties"));
            if (_showAtlasProperties) {
                DrawAtlasProperties();
            }
            serializedObject.ApplyModifiedProperties();
        }

        /// <summary>
        /// Draws the texture atlas properties for the user to manipulate
        /// </summary>
        void DrawAtlasProperties() {
            EditorGUI.indentLevel++;
            EditorGUILayout.IntSlider(textureAtlasProperties.FindPropertyRelative("_anisoLevel"), 0, 10, new GUIContent("Aniso Level"));
            EditorGUILayout.PropertyField(textureAtlasProperties.FindPropertyRelative("_readableTexture"), new GUIContent("Readable Atlas", "Set this to true if you want to read pixels from the atlas once it is formed, if you do not need this functionality, set it to false to free up resources"));
            EditorGUILayout.PropertyField(textureAtlasProperties.FindPropertyRelative("_filterMode"), new GUIContent("Filter Mode"));
            EditorGUILayout.PropertyField(textureAtlasProperties.FindPropertyRelative("_ignoreTransparency"), new GUIContent("No Transparency", "If set to true it will ignore all transparency when creating the texture atlas. This is for cases where the texture artist put a transparent background behind the texture when it wasn't needed etc."));
            EditorGUILayout.PropertyField(textureAtlasProperties.FindPropertyRelative("_wrapMode"), new GUIContent("Wrap Mode"));
            EditorGUILayout.IntPopup(textureAtlasProperties.FindPropertyRelative("_maxTextureSize"), sizeOptions, sizeOptionsValues, new GUIContent("Texture Size"));
            EditorGUILayout.PropertyField(textureAtlasProperties.FindPropertyRelative("_padding"), new GUIContent("Texture Padding", "This is the amount of pixels between each object in the texture. Increasing this can increase the size of your texture but it can help with mip maps"));
            EditorGUI.indentLevel--;
            ReorderableListGUI.Title(new GUIContent("Batched Shader Properties", "These are properties within the shader that DrawCallMinimizer will look for to determine which textures go together, and so you can batch more complex shaders together"));
            ReorderableListGUI.ListField<ShaderProperties>(drawCallTarget.textureAtlasProperties.shaderPropertiesToLookFor, PropertyItemDrawer, ReorderableListGUI.DefaultItemHeight * 2, ReorderableListFlags.DisableReordering | ReorderableListFlags.DisableDuplicateCommand);
        }

        /// <summary>
        /// A special method that gives the reorderable list a way to draw the GUI for the objects contained within it
        /// </summary>
        /// <returns>The item drawer.</returns>
        /// <param name="position">Position.</param>
        /// <param name="itemValue">Item value.</param>
        static private ShaderProperties PropertyItemDrawer(Rect position, ShaderProperties itemValue) {
            if (itemValue != null) {
                float originalHeight = position.height;
                float originalYPosition = position.y;
                position.height *= 0.5f;

                itemValue.markAsNormal = EditorGUI.Toggle(position, new GUIContent("Is Normal", "One thing to keep in mind is that textures cannot be set as a Unity normal map at run time currently, so if you are going to set this to true, make sure that you have a shader that can handle external normal maps. All this does is make sure that the texture is in the right format for these non native shaders"), itemValue.markAsNormal);
                position.y += position.height;
                itemValue.propertyName = EditorGUI.TextField(position, new GUIContent("Name", "This is the name of the property in the shader that you are references, as an example, the default property for diffuse shaders is _MainTex"), itemValue.propertyName);
                position.height = originalHeight;
                position.y = originalYPosition;
                position.width -= 50;


                position.x = position.xMax + 5;
                position.width = 45;
            }
            return itemValue;
        }
    }
}