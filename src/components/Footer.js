import React from 'react'

import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DescriptionIcon from '@material-ui/icons/Description'
import GitHubIcon from '@material-ui/icons/GitHub'

function Footer(props) {
  return (
    <Box display="flex" justifyContent="flex-end" mx={10}>
      <Box>
        <IconButton aria-label="blog" href="http://yucatio.hatenablog.com/entry/2019/12/23/172547">
          <Tooltip title="blog">
            <DescriptionIcon />
          </Tooltip>
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="GitHub" href="https://github.com/yucatio/date-fns-calendar">
          <Tooltip title="GitHub">
            <GitHubIcon />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Footer
